export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '628fc407d6775400b78ce72d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-tutorial-studio-36ip2cek',
                  apiId: 'fa7e7754-9d76-49f3-a9a7-3cf5feb563b2'
                },
                {
                  buildHookId: '628fc4073af65e08c60db5b8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-tutorial-web',
                  apiId: 'f3952d1b-2f69-4d64-a00b-431955de4dad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/peterschuelke/sanity-nextjs-tutorial',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-tutorial-web.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
