# Series

## Get Series

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.category.getSeries('GNPCA')
  .then((res) => {
    console.log('Series', res);
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
    "seriess": [
        {
            "id": "GNPCA",
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "title": "Real Gross National Product",
            "observation_start": "1929-01-01",
            "observation_end": "2012-01-01",
            "frequency": "Annual",
            "frequency_short": "A",
            "units": "Billions of Chained 2009 Dollars",
            "units_short": "Bil. of Chn. 2009 $",
            "seasonal_adjustment": "Not Seasonally Adjusted",
            "seasonal_adjustment_short": "NSA",
            "last_updated": "2013-07-31 09:26:16-05",
            "popularity": 39,
            "notes": "BEA Account Code: A001RX1"
        }
    ]
}
```

Get an economic data series.

### HTTP Request

`GET https://api.stlouisfed.org/fred/series`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
series_id | None | true | String | The id for a series. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None


## Get Categories For Series

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.category.getCategoriesForSeries('EXJPUS')
  .then((res) => {
    console.log('Categories For Series', res);
  })
  .catch((err) => {
    console.error('Error', err);
  })
```

> The above command returns JSON structured like this:

```json
{
    "categories": [
        {
            "id": 95,
            "name": "Monthly Rates",
            "parent_id": 15
        },
        {
            "id": 275,
            "name": "Japan",
            "parent_id": 158
        }
    ]
}
```

Get the categories for an economic data series.

### HTTP Request

`GET https://api.stlouisfed.org/fred/categories`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
series_id | None | true | Integer | The id for a series. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
















## Get Observations For Series

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.category.getObservationsForSeries('GNPCA')
  .then((res) => {
    console.log('Observations For Series', res);
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
    "observation_start": "1776-07-04",
    "observation_end": "9999-12-31",
    "units": "lin",
    "output_type": 1,
    "file_type": "json",
    "order_by": "observation_date",
    "sort_order": "asc",
    "count": 84,
    "offset": 0,
    "limit": 100000,
    "observations": [
        {
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "date": "1929-01-01",
            "value": "1065.9"
        },
        {
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "date": "1930-01-01",
            "value": "975.5"
        },
        {
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "date": "1931-01-01",
            "value": "912.1"
        },
    ...
    ]
}
```

Get the observations or data values for an economic data series.

### HTTP Request

`GET https://api.stlouisfed.org/fred/observations`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
series_id | None | true | Integer | The id for a series. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
limit | 100000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
sort_order | asc | false | String | Sort results is ascending or descending order for attribute values specified by order_by. | One of the following strings: 'asc', 'desc'.
observation_start | 1776-07-04 | false | Date | The start of the observation period. | YYYY-MM-DD formatted string
observation_end | 9999-12-31 | false | Date | The start of the observation period. | YYYY-MM-DD formatted string
units | lin | false | String | A key that indicates a data value transformation. | One of the following values: 'lin', 'chg', 'ch1', 'pch', 'pc1', 'pca', 'cch', 'cca', 'log'
frequency | None | false | String | An optional parameter that indicates a lower frequency to aggregate values to. | One of the following values: 'd', 'w', 'bw', 'm', 'q', 'sa', 'a', 'wef', 'weth', 'wew', 'wetu', 'wem', 'wesu', 'wesa', 'bwew', 'bwem'
aggregation_method | avg | false | String | A key that indicates the aggregation method used for frequency aggregation. | One of the following values: 'avg', 'sum', 'eop'. This parameter has no affect if the frequency parameter is not set. 
output_type | 1 | false | Integer | An integer that indicates an output type. | One of the following values: '1', '2', '3', '4'
vintage_dates | None | false | String | A comma separated string of YYYY-MM-DD formatted dates in history (e.g. 2000-01-01,2005-02-24). Vintage dates are used to download data as it existed on these specified dates in history. Vintage dates can be specified instead of a real-time period using realtime_start and realtime_end. | See Description
