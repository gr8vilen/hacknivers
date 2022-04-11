export default{
    name: 'pabout',
    title : 'pAbout',
    type: 'document',
    fields: [
        {
            name:'imageurl',
            title:'ImgUrl',
            type:'image',
            Option:{
                hotspot: true,
            }
        },
        {
            name:'titel',
            title:'Titel',
            type:'string',
        },
        {
            name:'para',
            title:'Para',
            type:'string',
        },
  ]

}