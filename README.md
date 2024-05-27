# How to Use

To call the map we can use the following code 
 ```
  <c-lightning-map props={state.childProps}> </c-lightning-map>
```

We need to pass the following details in props 

- data: records or mapped data from which we need to get the name, latitude and longitude of the map.
- latitude: Name of the latitude field
- longitude: Name of the longitude field
- iconLabel: Icon which we want to show on the map. 

We can pass the following in this format: 
```
    childProps: {
            data: [],
            longitude: 'School_Location__Longitude__s',
            latitude: 'School_Location__Latitude__s',
            mapIcons: {
                path: 'M 0 0 Z L -11 -10 L 11 -10 Z Z M 13.019 -73.146 L 20.302 -73.146 C 21.288 -73.146 22.135 -72.301 22.135 -71.313 L 22.135 -59.142 L 36.281 -49.462 C 36.987 -48.993 37.175 -48.052 36.703 -47.348 C 36.234 -46.689 35.293 -46.501 34.589 -46.971 L 0.002 -70.702 L -34.635 -46.97 C -35.292 -46.5 -36.232 -46.643 -36.701 -47.394 C -37.172 -48.052 -36.984 -48.992 -36.326 -49.461 L -1.175 -73.523 C -0.94 -73.852 -0.518 -74.04 -0.095 -74.04 C 0.376 -74.087 0.845 -73.899 1.175 -73.523 L 11.136 -66.709 L 11.136 -71.313 C 11.137 -72.3 11.983 -73.146 13.019 -73.146 Z M -25.798 -49.555 L -0.093 -67.366 L 25.613 -49.555 L 25.613 -19.948 C 25.613 -17.739 23.828 -15.954 21.619 -15.954 L 6.814 -15.954 L 6.814 -41.237 L -6.202 -41.237 L -6.202 -15.954 L -21.804 -15.954 C -24.014 -15.954 -25.798 -17.739 -25.798 -19.948 L -25.798 -49.555 Z',
                fillColor: 'green',
                fillOpacity: 1,
                strokeWeight: 0,
                scale: 0.4,
                anchor: { x: 0, y: 0 },
            },
        },
```

## For further configrations of the lightning map Please refer: 
https://developer.salesforce.com/docs/component-library/bundle/lightning-map/documentation
