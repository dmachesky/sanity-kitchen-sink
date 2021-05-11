export default {
  widgets: [
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
                  buildHookId: '609a7f8e4c047214bcd5d60b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gms7fche',
                  apiId: 'd31d29cc-4c26-4d12-b67e-cc648bd43576'
                },
                {
                  buildHookId: '609a7f8e5136dbfd5480dd55',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bwphin4r',
                  apiId: '92397a41-02c4-43d3-96ad-deb049e3c82f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dmachesky/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bwphin4r.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
