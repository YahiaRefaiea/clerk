Router.unauthorized = function(callback) {
  Router.wrapper = ['unauthorized']
  var location = Router.location.split('/').filter(Boolean)

  //  AUTH
  if(location[0] === undefined) {
    Router.push('auth intro')

    setTimeout(function() {
      Router.updateWrapper('switch', 'intro')
    }, 1500 * 4)
  }

  //  APP
  else {
    Router.push('app')

    //  VACANCIES
    if(location[0] == 'vacancies' && location[1] === undefined) {
      Router.push('vacancies')
    }

    //  COMPANY
    else {
      var company = location[0]

      if(location[1] === undefined) {
        Router.push('company')
      }

      //  VACANCY
      else {
        var vacancy = location[1]

        if(location[2] === undefined) {
          Router.push('vacancy')
        }

        else Router.push('notFound')
      }
    }
  }

  //  CALLBACK
  Router.callback(callback)
}
