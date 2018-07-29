const api = "https://api.foursquare.com/v2"
const client_id = "GD1U0GHJVRDG1HNUQMPZVIA0GFPV2TSATLU5BEXQDBT4T2LM"
const client_secret = "PZXI0GPI45F00XFPDLHHSUN0EMFYZF4OWLW2FZA53IL2OWKR"
const version = "20180503"

export const search = (lat, lng, radius, limits, query) =>
  fetch(`${api}/venues/search?ll=${lat},${lng}&limit=${limits}&radius=${radius}&query=${query}&client_id=${client_id}&client_secret=${client_secret}&v=${version}`)
  .then(res => res.json())
  .catch(error => alert(error + ' on search API call'))

export const search_q = (lat, lng, query, radius, limits, categories) =>
  fetch(`${api}/venues/search?ll=${lat},${lng}&
                              limit=${limits}&
                              radius=${radius}&
                              categoryId=${categories}&
                              client_id=${client_id}&
                              client_secret=${client_secret}&
                              v=${version}`)
  .then(res => res.json())
  .catch(error => alert(error + ' on search_q API call'))

export const getDetail = (venueId) =>
  fetch(`${api}/venues/${venueId}?&client_id=${client_id}&client_secret=${client_secret}&v=${version}`)
  .then(res => res.json())
  .catch(error => alert(error + ' on getDetail API call'))

export const getPhotos = (venueId) =>
  fetch(`${api}/venues/${venueId}/photos?&limit=1&client_id=${client_id}&client_secret=${client_secret}&v=${version}`)
  .then(res => res.json())
  .catch(error => alert(error + ' on getPhotos API call'))
