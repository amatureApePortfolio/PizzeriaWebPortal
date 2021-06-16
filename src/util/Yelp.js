const apikey = 'akB_KOJqnyV9cYHhUSxN_flnPL0YcuRAiftbFejRG2AB643_FHP815jcLSuqJ-H9klgwr1X5AVZG0bJ1zcxI6Dk3athcu8mQ8okvG9oHWEQ_zQ_7700j4n7hdjbJYHYx'

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apikey}`
      }
    }).then(response => response.json()).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        })
      }
    })
  }
};

export default Yelp;