export default{
    name: 'projects',
    title : 'Projects',
    type: 'document',
    fields: [
        {
            name:'name',
            title:'Name',
            type:'string',
        },
        {
            name:'about',
            title:'About',
            type:'string',
        },
        {
            name:'imagUrl',
            title:'ImgUrl',
            type:'image',
            Option:{
                hotspot: true,
            }
        },
        {
            name:'pro_url',
            title:'Pro_url',
            type:'string',
        },
  ]

}