# Sources

## Get All Sources

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.category.getAllSources()
  .then((res) => {
    console.log('Sources', res);
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
    "order_by": "source_id",
    "sort_order": "asc",
    "count": 58,
    "offset": 0,
    "limit": 1000,
    "sources": [
        {
            "id": 1,
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "name": "Board of Governors of the Federal Reserve System",
            "link": "http://www.federalreserve.gov/"
        },
        {
            "id": 3,
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "name": "Federal Reserve Bank of Philadelphia",
            "link": "http://www.philadelphiafed.org/"
        },
        {
            "id": 4,
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "name": "Federal Reserve Bank of St. Louis",
            "link": "http://www.stlouisfed.org/"
        },
        {
            "id": 6,
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "name": "Federal Financial Institutions Examination Council",
            "link": "http://www.ffiec.gov/"
        }
    ...
    ]
}
```

Get all sources of economic data.

### HTTP Request

`GET https://api.stlouisfed.org/fred/sources`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
limit | 1000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
order_by | source_id | false | String | Order results by values of the specified attribute. | One of the following strings: 'source_id', 'name', 'realtime_start', 'realtime_end'.
sort_order | asc | false | String | Sort results is ascending or descending order for attribute values specified by order_by. | One of the following strings: 'asc', 'desc'.