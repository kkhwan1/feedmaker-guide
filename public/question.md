Netlify는 여러 XOR 필터를 기반으로 파일을 조회하려고 시도하고, 이 모든 필터가 실패하면 결국 404 페이지를 제공하게 됩니다. 예를 들어, 에 대한 요청은 404에 도달하기 전에 , , 및 여러 다른 조합(반드시 같은 순서가 아님)을 /example/확인합니다. 그러나 특정 URL에서 404가 발생할 것으로 예상하지 못했다면 그 이유를 알아내고 잠재적으로 수정하는 데 관심이 있을 수 있습니다. 이 가이드는 Netlify에서 가장 일반적인 이유(및 해결책)를 다루는 것을 목표로 합니다. 이 가이드는 404에 대한 일반적인 이유(잘못된 URL 등)가 적용되지 않는다고 가정합니다./example/index.html/example.html/example/home.html

잘못된 게시 디렉토리: 누군가가 빌드 단계 없이 사이트를 직접 배포하려고 할 때, 우리가 발견한 일반적인 시나리오는 사이트를 git repo에 업로드하고 모든 파일을 하위 폴더 안에 넣는 것입니다. 그러나 프레임워크가 부족하기 때문에 사이트를 Netlify에 연결할 때 올바른 설정을 구성하는 책임을 사용자에게 맡기고 일부 사용자는 게시 디렉토리를 구성하지 않습니다. 따라서 사이트를 방문하면 파일이 실제로 내부에 있으므로 404가 표시됩니다 https://their-site.netlify.app/sub-folder. 이 경우 모든 파일을 하위 폴더 밖으로 옮기거나 Netlify 사이트 설정에서 게시 디렉토리를 변경하세요.

SPA 리디렉션 규칙 누락: Create React App, Vite, Angular 등과 같은 다양한 도구를 사용하여 단일 페이지 애플리케이션을 만듭니다. 이러한 애플리케이션은 경로당 HTML 페이지가 없지만 대신 JavaScript를 사용하여 탐색을 처리합니다. 이러한 앱의 경우 다음 내용이 있는 것이 중요합니다.

/* /index.html 200
사이트를 빌드할 때 게시 디렉토리로 복사되도록 (또는 비슷한) 폴더 _redirects에 있어야 하는 파일 의 내용으로 지정합니다 .public

서버 측 렌더링된 콘텐츠: Next.js, Gatsby, Nuxt, Astro, Remix, SvelteKit 등 요즘 많은 프레임워크가 Netlify에서 서버 측 렌더링을 지원합니다. Netlify는 Next.js와 Gatsby에 대한 자체 통합을 공식적으로 유지하는 반면, 다른 프레임워크는 Netlify에 대한 통합을 유지합니다. 예를 들어 Next.js의 경우 Next.js 런타임은 최소한의 Next.js 사이트에 대해서도 여러 리디렉션을 생성할 수 있습니다. Gatsby의 경우에도 SSR/DSG를 사용하면 몇 가지 리디렉션을 생성합니다. Netlify Functions를 사용하여 SSR을 사용하는 다른 프레임워크의 경우 이 라우팅을 처리하는 리디렉션이 최소 1개는 있습니다. 따라서 배포에서 리디렉션이 표시되지 않거나 Next.js의 경우 리디렉션 수가 상당히 적으면 통합에 문제가 있는 것입니다. 해당 통합의 문서를 참조하여 올바르게 구성되었는지 확인하는 것이 좋습니다.

SSR을 사용하는 또 다른 상황은 코드에 있는 조건 논리에 따라 요청에 대해 404를 보낼 수 있다는 것입니다.

404 오류가 프록시 URL에서 발생하는 경우, 프록시 대상이 404 오류를 제공하지 않는지 확인하세요.

HTML 페이지가 정상적으로 로드되지만 자산이 누락되거나 404가 발생하는 경우 해당 경로가 올바른지 확인하세요. Create React App은 homepage에서 확인 package.json하므로 자산 경로를 예상과 다르게 구성할 수 있습니다.

요청을 차단할 수 있는 Edge Functions를 실행하고 있는지 확인하세요.

사이트를 다른 사이트의 하위 디렉토리로 프록시하기 위해 재작성을 사용하는 경우, 에셋이 프록시 소스의 디렉토리 구조와 일치하는 URL에 게시되었는지 확인하세요. 항상 <base>태그 또는 절대 URL을 사용하여 에셋이 안정적으로 로드되도록 할 수 있습니다.

의심이나 혼란이 있는 경우 로컬에서 사이트를 빌드해 보는 것이 좋습니다(개발 서버가 아닌 빌드 명령을 사용). 또는 이 문서에서 설명한 대로 배포 파일을 찾아보거나 다운로드해 보세요. 새로운 기능: 배포 파일 브라우저로 배포 파일의 파일을 찾아보고 요청한 경로에 파일이 실제로 있는지 확인하세요.

이 중 어느 것도 해당되지 않거나 여전히 문제가 있는 경우 다른 스레드를 열어 논의하세요. 설정과 관련하여 가능한 한 많은 세부 정보를 포함해야 합니다.