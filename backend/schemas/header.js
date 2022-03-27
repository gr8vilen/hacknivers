export default{
    name: 'header',
    title : 'Header',
    type: 'document',
    fields: [
        {
            name:'name',
            title:'Name',
            type:'string',
        },
        {
            name:'imageurl',
            title:'ImgUrl',
            type:'image',
            Option:{
                hotspot: true,
            }
        },
  ]

}