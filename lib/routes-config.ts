// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  external?:  true,
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Roadmaps", href: "/roadmaps",
        noLink: true, 
        items: [
          {
            title: "General",
            href: '/general',
            external: true
          },
          {
            title: "Angular",
            href: '/angular'
          },
          {
            title: "Vue",
            href: '/vue'
          },
          {
            title: "React",
            href: '/react'
          },
        ]
       },
      { title: "Resources", href: "/resources",
        noLink: true,
        items: [
          {
            title: "General",
            href: '/general'
          },
          {
            title: "Angular",
            href: '/angular'
          },
          {
            title: "Vue",
            href: '/vue'
          },
          {
            title: "React",
            href: '/react'
          },
        ]
       },
      ],
  },
  {
    title: "Advanced concepts",
    href: '/advanced-concepts',
    noLink: true,
    items: [
      {
        title: 'Dependency Injection',
        href: '/dependency-injection'
      },
      {
        title: 'Singleton',
        href: '/singleton'
      },
      {
        title: 'Interceptors',
        href: '/interceptors'
      },
      {
        title: 'Microfrontends',
        href: 'microfrontends'
      },
      {
        title: 'PWAs',
        href: 'pwas'
      },
      {
        title: 'Workers',
        href: 'workers'
      },
      {
        title: 'Refactoring',
        href: 'refactoring'
      },
      {
        title: 'Performance optimization',
        href: 'performance-optimization'
      },
      {
        title: 'Server side rendering',
        href: 'ssr'
      },
      {
        title: 'State management',
        href: 'state-management'
      },
      {
        title: 'NPM and Libraries',
        href: 'npm-and-libraries'
      },
      {
        title: 'Testing',
        href: 'testing'
      },
      {
        title: 'CI/CD',
        href: 'ci-cd'
      }
    ]
  },
  {
    title: 'Angular',
    href: '/angular',
    noLink: true,
    items: [
      {
        title: 'Core',
        href: '/core',
        noLink: true,
        items: [
          {
            title: 'RxJS / Reactive',
            href: '/rxjs'
          },
          {
            title: 'Change detection',
            href: '/change-detection'
          },
          {
            title: 'ZoneJS',
            href: '/zonejs'
          },
          {
            title: 'Forms',
            href: '/forms'
          },
          {
            title: 'Templates',
            href: '/templates'
          },
        ]
      },
      {
        title:'Data flow',
        href: '/data-flow',
        noLink: true,
        items: [
          
          {
            title: 'Push architecture',
            href: '/push-architecture'
          },
          {
            title: 'Facade pattern',
            href: '/facade-pattern'
          },
          {
            title: 'State management',
            href: '/state-management'
          },
        ]
      },
      {
        title: 'Microfrontends',
        href: 'microfrontends'
      },
      {
        title: 'NX monorepo',
        href: 'NX monorepo'
      },
      {
        title: 'Angular checklist',
        href: 'checklist'
      },
      {
        title: 'Conclusion and best practices',
        href: 'best-practices'
      }
      
    ]
  },
  {
    title: 'Vue.js',
    href: 'vuejs',
    noLink: true,
    items: [
      {
        title: 'Core',
        href: 'core',
        noLink: true,
        items: [
          {
            title: 'Reactivity',
            href: 'reactivity'
          },
          {
            title: 'Change detection',
            href: 'change-detection'
          },
          {
            title: 'Composition API',
            href: 'composition-api'
          },
          {
            title: 'Forms',
            href: 'forms'
          },
          {
            title: 'Templates',
            href: 'templates'
          },
        ]
      },
      {
        title: 'Data flow',
        href: 'data-flow',
        noLink: true,
        items: [
          {
            title: 'Dependency Injection',
            href: 'dependency-injection'
          },
          {
            title: 'Interceptors',
            href: 'interceptors'
          },
          {
            title: 'Push architecture',
            href: 'push-architecture'
          },
          {
            title: 'Facade pattern',
            href: 'facade-pattern'
          },
          {
            title: 'State management',
            href: 'state-management'
          },
        ]
      },
      {
        title: 'Microfrontends',
        href: 'microfrontends'
      },
      {
        title: 'Monorepo setup',
        href: 'monorepo-setup'
      },
      {
        title: 'Vue.js checklist',
        href: 'checklist'
      },
      {
        title: 'Conclusion and best practices',
        href: 'best-practices'
      }
    ]
  }
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
