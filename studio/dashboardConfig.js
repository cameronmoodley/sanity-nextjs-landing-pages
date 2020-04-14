export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e95b92e87d3feb3285f6454',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9iykfmcj',
                  apiId: '5725c4be-a052-4564-87d0-92f7cefa6164'
                },
                {
                  buildHookId: '5e95b92efda81be5785ebded',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ar1znov2',
                  apiId: '1be022b0-c93c-4ec0-9038-42ad0e479476'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cameronmoodley/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ar1znov2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
