# Releases

## Get Releases

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.releases.getReleases()
  .then((res) => {
    console.log('Releases', res);
  })
  .catch((err) => {
    console.error('Error', err);
  })
```

> The above command returns JSON structured like this:

```json
{
    "realtime_start": "2013-08-13",
    "realtime_end": "2013-08-13",
    "order_by": "release_id",
    "sort_order": "asc",
    "count": 158,
    "offset": 0,
    "limit": 1000,
    "releases": [
        {
            "id": 9,
            "realtime_start": "2013-08-13",
            "realtime_end": "2013-08-13",
            "name": "Advance Monthly Sales for Retail and Food Services",
            "press_release": true,
            "link": "http://www.census.gov/retail/"
        },
        {
            "id": 10,
            "realtime_start": "2013-08-13",
            "realtime_end": "2013-08-13",
            "name": "Consumer Price Index",
            "press_release": true,
            "link": "http://www.bls.gov/cpi/"
        },
        {
            "id": 11,
            "realtime_start": "2013-08-13",
            "realtime_end": "2013-08-13",
            "name": "Employment Cost Index",
            "press_release": true,
            "link": "http://www.bls.gov/ncs/ect/"
        },
        {
            "id": 13,
            "realtime_start": "2013-08-13",
            "realtime_end": "2013-08-13",
            "name": "G.17 Industrial Production and Capacity Utilization",
            "press_release": true,
            "link": "http://www.federalreserve.gov/releases/g17/"
        },
...
    ]
}
```

Get all releases of economic data.

### HTTP Request

`GET https://api.stlouisfed.org/fred/releases`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
limit | 1000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
order_by | release_id | false | String | Order results by values of the specified attribute. | One of the following strings: 'release_id', 'name', 'press_release', 'realtime_start', 'realtime_end'.
sort_order | asc | false | String | Sort results is ascending or descending order for attribute values specified by order_by. | One of the following strings: 'asc', 'desc'.


## Get Release Dates for All Releases

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.releases.getAllReleasesWithDates()
  .then((res) => {
    console.log('Releases', res);
  })
  .catch((err) => {
    console.error('Error', err);
  })
```

> The above command returns JSON structured like this:

```json
{
    "realtime_start": "2013-01-01",
    "realtime_end": "9999-12-31",
    "order_by": "release_date",
    "sort_order": "desc",
    "count": 1129,
    "offset": 0,
    "limit": 1000,
    "release_dates": [
        {
            "release_id": 9,
            "release_name": "Advance Monthly Sales for Retail and Food Services",
            "date": "2013-08-13"
        },
        {
            "release_id": 262,
            "release_name": "Failures and Assistance Transactions",
            "date": "2013-08-13"
        },
        {
            "release_id": 25,
            "release_name": "Manufacturing and Trade Inventories and Sales",
            "date": "2013-08-13"
        },
        {
            "release_id": 92,
            "release_name": "Selected Real Retail Sales Series",
            "date": "2013-08-13"
        },
        {
            "release_id": 188,
            "release_name": "U.S. Import and Export Price Indexes",
            "date": "2013-08-13"
        },
        {
            "release_id": 183,
            "release_name": "Gasoline and Diesel Fuel Update",
            "date": "2013-08-12"
        },
...
    ]
}
```

Get release dates for all releases of economic data.

### HTTP Request

`GET https://api.stlouisfed.org/fred/releases/dates`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
limit | 1000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
order_by | release_date | false | String | Order results by values of the specified attribute. | One of the following strings: 'release_date', 'release_id', 'release_name'.
sort_order | desc | false | String | Sort results is ascending or descending order for attribute values specified by order_by. | One of the following strings: 'asc', 'desc'.
include_release_dates_with_no_data | 'false' | false | String | Determines whether release dates with no data available are returned. | One of the following strings: 'true', 'false'.