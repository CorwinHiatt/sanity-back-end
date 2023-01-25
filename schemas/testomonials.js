export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Title',
      type:'string',
},
    {
      name: 'company',
      title: 'Company',
      type:'string',
},
    {
      name: 'imageURL',
      title: 'ImgURL',
      type:'image',
      options: {
        hotspot: true,
      },
},
    {
      name: 'feedback',
      title: 'Feedback',
      type:'string',
  },

  ]
}