# Series

## Get Series

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.series.getSeries('GNPCA')
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
    "series": [
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

fred.series.getCategoriesForSeries('EXJPUS')
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

`GET https://api.stlouisfed.org/fred/series/categories`

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

fred.series.getObservationsForSeries('GNPCA')
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

`GET https://api.stlouisfed.org/fred/series/observations`

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


## Get Release For Series

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.series.getReleaseForSeries('IRA')
  .then((res) => {
    console.log('Release For Series', res);
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
    "releases": [
        {
            "id": 21,
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "name": "H.6 Money Stock Measures",
            "press_release": true,
            "link": "http://www.federalreserve.gov/releases/h6/"
        }
    ]
}
```

Get the release for an economic data series.

### HTTP Request

`GET https://api.stlouisfed.org/fred/series/release`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
series_id | None | true | String | The id for a series. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None


## Search for Series

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.series.getSeriesThatMatchesSearch('monetary+service+index')
  .then((res) => {
    console.log('Series That Match Search', res);
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
    "order_by": "search_rank",
    "sort_order": "desc",
    "count": 25,
    "offset": 0,
    "limit": 1000,
    "series": [
        {
            "id": "MSIM2",
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "title": "Monetary Services Index: M2 (preferred)",
            "observation_start": "1967-01-01",
            "observation_end": "2013-06-01",
            "frequency": "Monthly",
            "frequency_short": "M",
            "units": "Billions of Dollars",
            "units_short": "Bil. of $",
            "seasonal_adjustment": "Seasonally Adjusted",
            "seasonal_adjustment_short": "SA",
            "last_updated": "2013-07-12 11:01:06-05",
            "popularity": 52,
            "notes": "The MSI measure the flow of monetary services received each period by households and firms from their holdings of monetary assets (levels of the indexes are sometimes referred to as Divisia monetary aggregates). \r\nPreferred benchmark rate equals 100 basis points plus the largest rate in the set of rates. \r\nAlternative benchmark rate equals the larger of the preferred benchmark rate and the Baa corporate bond yield.\r\nMore information about the new MSI can be found at \r\nhttp://research.stlouisfed.org/msi/index.html."
        },
        {
            "id": "MSIM1P",
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "title": "Monetary Services Index: M1 (preferred)",
            "observation_start": "1967-01-01",
            "observation_end": "2013-06-01",
            "frequency": "Monthly",
            "frequency_short": "M",
            "units": "Billions of Dollars",
            "units_short": "Bil. of $",
            "seasonal_adjustment": "Seasonally Adjusted",
            "seasonal_adjustment_short": "SA",
            "last_updated": "2013-07-12 11:01:03-05",
            "popularity": 40,
            "notes": "The MSI measure the flow of monetary services received each period by households and firms from their holdings of monetary assets (levels of the indexes are sometimes referred to as Divisia monetary aggregates)."
        },
        {
            "id": "MSIALLP",
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "title": "Monetary Services Index: ALL Assets (preferred)",
            "observation_start": "1967-01-01",
            "observation_end": "2013-06-01",
            "frequency": "Monthly",
            "frequency_short": "M",
            "units": "Billions of Dollars",
            "units_short": "Bil. of $",
            "seasonal_adjustment": "Seasonally Adjusted",
            "seasonal_adjustment_short": "SA",
            "last_updated": "2013-07-12 11:01:03-05",
            "popularity": 38,
            "notes": "The MSI measure the flow of monetary services received each period by households and firms from their holdings of monetary assets (levels of the indexes are sometimes referred to as Divisia monetary aggregates).\r\nPreferred benchmark rate equals 100 basis points plus the largest rate in the set of rates. \r\nAlternative benchmark rate equals the larger of the preferred benchmark rate and the Baa corporate bond yield."
        }
    ...
    ]
}
```

Get economic data series that match search text.

### HTTP Request

`GET https://api.stlouisfed.org/fred/series/search`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
search_text | "" | true | String | The words to match against economic data series. | None
search_type | full_text | false | String | Determines the type of search to perform. | One of the following strings: 'full_text', 'series_id'.
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
limit | 1000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
order_by | If the value of search_type is 'full_text' then the default value of order_by is 'search_rank'. If the value of search_type is 'series_id' then the default value of order_by is 'series_id'. | false | String | Order results by values of the specified attribute. | One of the following strings: 'search_rank', 'series_id', 'title', 'units', 'frequency', 'seasonal_adjustment', 'realtime_start', 'realtime_end', 'last_updated', 'observation_start', 'observation_end', 'popularity'.
sort_order | If order_by is equal to 'search_rank' or 'popularity', then the default value of sort_order is 'desc'. Otherwise, the default sort order is 'asc'. | false | String | Sort results is ascending or descending order for attribute values specified by order_by. | One of the following strings: 'asc', 'desc'.
filter_variable | No filter | false | String | The attribute to filter results by. | On of the following strings: 'frequency', 'units', 'seasonal_adjustment'.
filter_value | No filter | false | String | None
tag_names | No filter | false | Semicolon delimited string | A semicolon delimited list of tag names that series match all of. | None
exclude_tag_names | No filter | false | Semicolon delimited string | A semicolon delimited list of tag names that series match none of. | Parameter exclude_tag_names requires that parameter tag_names also be set to limit the number of matching series.


## Get Tags for Series Search

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.series.getTagsForSeriesSearch('monetary+service+index')
  .then((res) => {
    console.log('Tags For Series That Match Search', res);
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
    "order_by": "series_count",
    "sort_order": "desc",
    "count": 18,
    "offset": 0,
    "limit": 1000,
    "tags": [
        {
            "name": "academic data",
            "group_id": "gen",
            "notes": "Time series data created mainly by academia to address growing demand in understanding specific concerns in the economy that are not well modeled by ordinary statistical agencies.",
            "created": "2012-08-29 10:22:19-05",
            "popularity": 62,
            "series_count": 25
        },
        {
            "name": "anderson & jones",
            "group_id": "src",
            "notes": "Richard Anderson and Barry Jones",
            "created": "2013-06-21 10:22:49-05",
            "popularity": 46,
            "series_count": 25
        },
        {
            "name": "divisia",
            "group_id": "gen",
            "notes": "Monetary Services Indexes",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 46,
            "series_count": 25
        }
    ...
    ]
}
```

Get the FRED tags for a series search. Optionally, filter results by tag name, tag group, or tag search.

### HTTP Request

`GET https://api.stlouisfed.org/fred/series/search/tags`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
series_search_text | "" | true | String | The words to match against economic data series. | None
search_type | full_text | false | String | Determines the type of search to perform. | One of the following strings: 'full_text', 'series_id'.
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
limit | 1000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
order_by | series_count | false | String | Order results by values of the specified attribute. | One of the following strings: 'series_count', 'popularity', 'created', 'name', 'group_id'.
sort_order | asc | false | String | Sort results is ascending or descending order for attribute values specified by order_by. | One of the following strings: 'asc', 'desc'.
tag_names | No filter | false | Semicolon delimited string | A semicolon delimited list of tag names that series match all of. | None
tag_group_id | No Filter | false | String | A tag group id to filter tags by type. | One of the following: 'freq', 'gen', 'geo', 'geot', 'rls', 'seas', 'src'.
tag_search_text | No Filter | false | String | The words to find matching tags with. | None


## Get Related Tags for Series Search

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.series.getRelatedTagsForSeriesSearch('morgage+rate')
  .then((res) => {
    console.log('Related Tags For Series That Match Search', res);
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
    "order_by": "series_count",
    "sort_order": "desc",
    "count": 10,
    "offset": 0,
    "limit": 1000,
    "tags": [
        {
            "name": "conventional",
            "group_id": "gen",
            "notes": "",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 63,
            "series_count": 3
        },
        {
            "name": "h15",
            "group_id": "rls",
            "notes": "H.15 Selected Interest Rates",
            "created": "2012-08-16 15:21:17-05",
            "popularity": 84,
            "series_count": 3
        },
        {
            "name": "interest rate",
            "group_id": "gen",
            "notes": "",
            "created": "2012-05-29 10:14:19-05",
            "popularity": 87,
            "series_count": 3
        }
    ...
    ]
}
```

Get the related FRED tags for one or more FRED tags matching a series search. Optionally, filter results by tag group or tag search.

### HTTP Request

`GET https://api.stlouisfed.org/fred/series/search/related_tags`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
series_search_text | "" | true | String | The words to match against economic data series. | None
search_type | full_text | false | String | Determines the type of search to perform. | One of the following strings: 'full_text', 'series_id'.
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
limit | 1000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
order_by | series_count | false | String | Order results by values of the specified attribute. | One of the following strings: 'series_count', 'popularity', 'created', 'name', 'group_id'.
sort_order | asc | false | String | Sort results is ascending or descending order for attribute values specified by order_by. | One of the following strings: 'asc', 'desc'.
tag_names | No filter | false | Semicolon delimited string | A semicolon delimited list of tag names that series match all of. | None
exclude_tag_names | No filter | false | Semicolon delimited string | A semicolon delimited list of tag names that series match none of. | Parameter exclude_tag_names requires that parameter tag_names also be set to limit the number of matching series.
tag_group_id | No Filter | false | String | A tag group id to filter tags by type. | One of the following: 'freq', 'gen', 'geo', 'geot', 'rls', 'seas', 'src'.
tag_search_text | No Filter | false | String | The words to find matching tags with. | None


## Get Tags for Series

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.series.getTagsForSeries('STLFSI')
  .then((res) => {
    console.log('Tags For Series', res);
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
    "order_by": "series_count",
    "sort_order": "desc",
    "count": 8,
    "offset": 0,
    "limit": 1000,
    "tags": [
        {
            "name": "nation",
            "group_id": "geot",
            "notes": "Country Level",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 100,
            "series_count": 105200
        },
        {
            "name": "nsa",
            "group_id": "seas",
            "notes": "Not seasonally adjusted",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 96,
            "series_count": 100468
        },
        {
            "name": "usa",
            "group_id": "geo",
            "notes": "United States of America",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 100,
            "series_count": 59469
        }
    ...
    ]
}
```

Get the FRED tags for a series.

### HTTP Request

`GET https://api.stlouisfed.org/fred/series/tags`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
series_id | None | true | Integer | The id for a series. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
order_by | series_count | false | String | Order results by values of the specified attribute. | One of the following strings: 'series_count', 'popularity', 'created', 'name', 'group_id'.
sort_order | asc | false | String | Sort results is ascending or descending order for attribute values specified by order_by. | One of the following strings: 'asc', 'desc'.


## Get Latest Updated Series

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.series.getUpdatedSeries()
  .then((res) => {
    console.log('Latest Updated Series', res);
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
    "filter_variable": "geography",
    "filter_value": "all",
    "order_by": "last_updated",
    "sort_order": "desc",
    "count": 143535,
    "offset": 0,
    "limit": 100,
    "seriess": [
        {
            "id": "PPIITM",
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "title": "Producer Price Index: Intermediate Materials: Supplies & Components",
            "observation_start": "1947-04-01",
            "observation_end": "2013-07-01",
            "frequency": "Monthly",
            "frequency_short": "M",
            "units": "Index 1982=100",
            "units_short": "Index 1982=100",
            "seasonal_adjustment": "Seasonally Adjusted",
            "seasonal_adjustment_short": "SA",
            "last_updated": "2013-08-14 08:36:05-05",
            "popularity": 52
        },
        {
            "id": "PPILFE",
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "title": "Producer Price Index: Finished Goods Less Food & Energy",
            "observation_start": "1974-01-01",
            "observation_end": "2013-07-01",
            "frequency": "Monthly",
            "frequency_short": "M",
            "units": "Index 1982=100",
            "units_short": "Index 1982=100",
            "seasonal_adjustment": "Seasonally Adjusted",
            "seasonal_adjustment_short": "SA",
            "last_updated": "2013-08-14 08:36:05-05",
            "popularity": 51
        },
        {
            "id": "PPIFGS",
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "title": "Producer Price Index: Finished Goods",
            "observation_start": "1947-04-01",
            "observation_end": "2013-07-01",
            "frequency": "Monthly",
            "frequency_short": "M",
            "units": "Index 1982=100",
            "units_short": "Index 1982=100",
            "seasonal_adjustment": "Seasonally Adjusted",
            "seasonal_adjustment_short": "SA",
            "last_updated": "2013-08-14 08:36:04-05",
            "popularity": 62
        }
    ...
    ]
}
```

Get economic data series sorted by when observations were updated on the FRED® server (attribute last_updated). Results are limited to series updated within the last two weeks.

### HTTP Request

`GET https://api.stlouisfed.org/fred/series/updates`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
series_id | None | true | Integer | The id for a series. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
order_by | series_count | false | String | Order results by values of the specified attribute. | One of the following strings: 'series_count', 'popularity', 'created', 'name', 'group_id'.
sort_order | asc | false | String | Sort results is ascending or descending order for attribute values specified by order_by. | One of the following strings: 'asc', 'desc'.
filter_value | all | false | String | Limit results by geographic type of economic data series; namely 'macro', 'regional', and 'all'. 'macro' limits results to macroeconomic data series. In general, these are series for entire countries that are not subregions of the United States. 'regional' limits results to series for parts of the US; namely, series for US states, counties, and Metropolitan Statistical Areas (MSA). 'all' does not filter results. | One of the values: 'macro', 'regional', 'all'


## Get Dates When Series Was Revised

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.series.getVintageDatesSeries('GNPCA')
  .then((res) => {
    console.log('Dates When Series Was Revised', res);
  })
  .catch((err) => {
    console.error('Error', err);
  })
```

> The above command returns JSON structured like this:

```json
{
    "realtime_start": "1776-07-04",
    "realtime_end": "9999-12-31",
    "order_by": "vintage_date",
    "sort_order": "asc",
    "count": 162,
    "offset": 0,
    "limit": 10000,
    "vintage_dates": [
        "1958-12-21",
        "1959-02-19",
        "1959-07-19",
        "1960-02-16",
        "1960-07-22",
        "1961-02-19",
        "1961-07-19",
        "1962-02-24",
        "1962-07-20",
        "1963-02-20",
        "1963-07-22"
    ...
    ]
}
```

Get the dates in history when a series' data values were revised or new data values were released. Vintage dates are the release dates for a series excluding release dates when the data for the series did not change.

### HTTP Request

`GET https://api.stlouisfed.org/fred/series/vintagedates`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
series_id | None | true | Integer | The id for a series. | None
realtime_start | 1776-07-04 (earliest available) | false | Date | The start of the real-time period. | None
realtime_end | 9999-12-31 (latest available) | false | Date | The end of the real-time period. | None
limit | 10000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 10000
offset | 0 | false | Integer | A non negative integer | A non negative integer
sort_order | asc | false | String | Sort results is ascending or descending order for attribute values specified by order_by. | One of the following strings: 'asc', 'desc'.