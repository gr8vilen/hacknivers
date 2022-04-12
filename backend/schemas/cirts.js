export default{
    name: 'cirts',
    title : 'Cirts',
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
            name:'from',
            title:'From',
            type:'string',
        },
  ]

}