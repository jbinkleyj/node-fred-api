# Source

## Get A Source

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.sources.getSource(1)
  .then((res) => {
    console.log('Source', res);
  })
  .catch((err) => {
    console.error('Error', err);
  })
```

> The above command returns JSON structured like this:

```json
{
    "realtime_start": "2013-08-14",
    "realtime_end": "2013-08-14",
    "sources": [
        {
            "id": 1,
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "name": "Board of Governors of the Federal Reserve System",
            "link": "http://www.federalreserve.gov/"
        }
    ]
}
```

Get a source of economic data.

### HTTP Request

`GET https://api.stlouisfed.org/fred/source`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
source_id | None | true | String | The id for a source. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None


## Get Releases For Source

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.sources.getReleasesForSource(1)
  .then((res) => {
    console.log('Releases For Source', res);
  })
  .catch((err) => {
    console.error('Error', err);
  })
```

> The above command returns JSON structured like this:

```json
{
    "realtime_start": "2013-08-14",
    "realtime_end": "2013-08-14",
    "order_by": "release_id",
    "sort_order": "asc",
    "count": 26,
    "offset": 0,
    "limit": 1000,
    "releases": [
        {
            "id": 13,
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "name": "G.17 Industrial Production and Capacity Utilization",
            "press_release": true,
            "link": "http://www.federalreserve.gov/releases/g17/"
        },
        {
            "id": 14,
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "name": "G.19 Consumer Credit",
            "press_release": true,
            "link": "http://www.federalreserve.gov/releases/g19/"
        },
        {
            "id": 15,
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "name": "G.5 Foreign Exchange Rates",
            "press_release": true,
            "link": "http://www.federalreserve.gov/releases/g5/"
        }
    ...
    ]
}
```

Get the releases for a source.

### HTTP Request

`GET https://api.stlouisfed.org/fred/source/release`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
source_id | None | true | String | The id for a source. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
limit | 1000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
order_by | release_id | false | String | Order results by values of the specified attribute. | One of the following strings: 'release_id', 'name', 'press_release', 'realtime_start', 'realtime_end'.
sort_order | asc | false | String | Sort results is ascending or descending order for attribute values specified by order_by. | One of the following strings: 'asc', 'desc'.