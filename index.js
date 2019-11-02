const sortByDistance = require('./arraySort')

const points = [
    {
        longitude: 106.652992,
        latitude: -6.301492,
        lokasi: {
            namaTempat: 'the breeze BSD',
        }
    },
    {
        longitude: 106.669777,
        latitude: -6.298421,
        lokasi: {
            namaTempat: 'Eka Hospital',
        }
    },
    {
        longitude: 106.676193,
        latitude: -6.315015,
        lokasi: {
            namaTempat: 'Stasiun Rawa Buntu',
        }
    },
    {
        longitude: 106.761795,
        latitude: -6.267882,
        lokasi: {
            namaTempat: 'Kota Bintaro',
        }
    },
    {
        longitude: 106.817139,
        latitude: -6.201610,
        lokasi: {
            namaTempat: 'Kota Tanah abang',
        }
    }

]

const opts = {
    yName: 'latitude',
    xName: 'longitude'
}
// Taman jajan gaul BSD
const origin = {
    longitude: 106.672560,
    latitude: -6.300610
}

const result = sortByDistance(origin, points, opts)

console.log('result KM', result.map(data => (data.distance*100).toString().slice(0,3)))
console.log('result name', result.map(location => location.lokasi.namaTempat));
