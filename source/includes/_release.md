# Release

## Get Release

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.category.getRelease(53)
  .then((res) => {
    console.log('Release', res);
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
            "id": 53,
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "name": "Gross Domestic Product",
            "press_release": true,
            "link": "http://www.bea.gov/national/index.htm"
        }
    ]
}
```

Get a release of economic data.

### HTTP Request

`GET https://api.stlouisfed.org/fred/release`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
release_id | None | true | Integer | The id for a release. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None

## Get Release With Dates

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.category.getReleaseWithDates(82)
  .then((res) => {
    console.log('Release With Dates', res);
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
    "order_by": "release_date",
    "sort_order": "asc",
    "count": 17,
    "offset": 0,
    "limit": 10000,
    "release_dates": [
        {
            "release_id": 82,
            "date": "1997-02-10"
        },
        {
            "release_id": 82,
            "date": "1998-02-10"
        },
        {
            "release_id": 82,
            "date": "1999-02-04"
        },
        {
            "release_id": 82,
            "date": "2000-02-10"
        },
        {
            "release_id": 82,
            "date": "2001-01-16"
        },
        {
            "release_id": 82,
            "date": "2002-02-06"
        },
        {
            "release_id": 82,
            "date": "2003-02-07"
        },
        {
            "release_id": 82,
            "date": "2004-02-09"
        },
        {
            "release_id": 82,
            "date": "2005-02-17"
        },
        {
            "release_id": 82,
            "date": "2006-02-13"
        },
        {
            "release_id": 82,
            "date": "2007-02-16"
        },
        {
            "release_id": 82,
            "date": "2008-02-11"
        },
        {
            "release_id": 82,
            "date": "2009-03-03"
        },
        {
            "release_id": 82,
            "date": "2010-02-11"
        },
        {
            "release_id": 82,
            "date": "2011-02-23"
        },
        {
            "release_id": 82,
            "date": "2012-10-24"
        },
        {
            "release_id": 82,
            "date": "2013-04-10"
        }
    ]
}
```

Get a release of economic data.

### HTTP Request

`GET https://api.stlouisfed.org/fred/release/dates`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
release_id | None | true | Integer | The id for a release. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
limit | 1000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
sort_order | asc | false | String | Sort results is ascending or descending release date order. | One of the following strings: 'asc', 'desc'.
include_release_dates_with_no_data | 'false' | false | String | Determines whether release dates with no data available are returned. | One of the following strings: 'true', 'false'.

## Get Series For Release

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.category.getSeriesForRelease(51)
  .then((res) => {
    console.log('Series for Release', res);
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
    "order_by": "series_id",
    "sort_order": "asc",
    "count": 39,
    "offset": 0,
    "limit": 1000,
    "seriess": [
        {
            "id": "BOMTVLM133S",
            "realtime_start": "2013-08-13",
            "realtime_end": "2013-08-13",
            "title": "U.S. Imports of Services - Travel",
            "observation_start": "1992-01-01",
            "observation_end": "2013-06-01",
            "frequency": "Monthly",
            "frequency_short": "M",
            "units": "Million of Dollars",
            "units_short": "Mil. of $",
            "seasonal_adjustment": "Seasonally Adjusted",
            "seasonal_adjustment_short": "SA",
            "last_updated": "2013-08-06 07:46:06-05",
            "popularity": 0
        },
        {
            "id": "BOMVGMM133S",
            "realtime_start": "2013-08-13",
            "realtime_end": "2013-08-13",
            "title": "U.S. Imports of Services - U.S. Government Misc. Services",
            "observation_start": "1992-01-01",
            "observation_end": "2013-06-01",
            "frequency": "Monthly",
            "frequency_short": "M",
            "units": "Millions of Dollars",
            "units_short": "Mil. of $",
            "seasonal_adjustment": "Seasonally Adjusted",
            "seasonal_adjustment_short": "SA",
            "last_updated": "2013-08-06 07:46:06-05",
            "popularity": 0
        },
        {
            "id": "BOMVJMM133S",
            "realtime_start": "2013-08-13",
            "realtime_end": "2013-08-13",
            "title": "U.S. Imports of Services - Direct Defense Expenditures",
            "observation_start": "1992-01-01",
            "observation_end": "2013-06-01",
            "frequency": "Monthly",
            "frequency_short": "M",
            "units": "Millions of Dollars",
            "units_short": "Mil. of $",
            "seasonal_adjustment": "Seasonally Adjusted",
            "seasonal_adjustment_short": "SA",
            "last_updated": "2013-08-06 07:46:06-05",
            "popularity": 17
        }
    ]
}
```

Get release dates for a release of economic data.

### HTTP Request

`GET https://api.stlouisfed.org/fred/release/series`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
release_id | None | true | Integer | The id for a release. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
limit | 1000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
order_by | series_id | false | String | Order results by values of the specified attribute. | One of the following strings: 'series_id', 'title', 'units', 'frequency', 'seasonal_adjustment', 'realtime_start', 'realtime_end', 'last_updated', 'observation_start', 'observation_end', 'popularity'.
sort_order | asc | false | String | Sort results is ascending or descending release date order. | One of the following strings: 'asc', 'desc'.
filter_variable | No filter | false | String | The attribute to filter results by. | On of the following strings: 'frequency', 'units', 'seasonal_adjustment'.
filter_value | No filter | false | String | The value of the filter_variable attribute to filter results by. | None
tag_names | No filter | false | Semicolon delimited string | A semicolon delimited list of tag names that series match all of. | None
exclude_tag_names | No filter | false | Semicolon delimited string | A semicolon delimited list of tag names that series match none of. | Parameter exclude_tag_names requires that parameter tag_names also be set to limit the number of matching series.

## Get Sources For Release

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.category.getSourcesForRelease(51)
  .then((res) => {
    console.log('Sources for Release', res);
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
            "id": 18,
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "name": "U.S. Department of Commerce: Bureau of Economic Analysis",
            "link": "http://www.bea.gov/"
        },
        {
            "id": 19,
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "name": "U.S. Department of Commerce: Census Bureau",
            "link": "http://www.census.gov/"
        }
    ]
}
```

Get the sources for a release of economic data.

### HTTP Request

`GET https://api.stlouisfed.org/fred/release/sources`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
release_id | None | true | Integer | The id for a release. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None

## Get Tags For Release

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.category.getTagsForRelease(86)
  .then((res) => {
    console.log('Tags for Release', res);
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
    "count": 13,
    "offset": 0,
    "limit": 1000,
    "tags": [
        {
            "name": "commercial paper",
            "group_id": "gen",
            "notes": "",
            "created": "2012-03-19 10:40:59-05",
            "popularity": 55,
            "series_count": 18
        },
        {
            "name": "frb",
            "group_id": "src",
            "notes": "Board of Governors of the Federal Reserve System",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 90,
            "series_count": 18
        },
        {
            "name": "nation",
            "group_id": "geot",
            "notes": "Country Level",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 100,
            "series_count": 18
        },
        {
            "name": "usa",
            "group_id": "geo",
            "notes": "United States of America",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 100,
            "series_count": 18
        },
        {
            "name": "weekly",
            "group_id": "freq",
            "notes": "",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 82,
            "series_count": 18
        },
        {
            "name": "nsa",
            "group_id": "seas",
            "notes": "Not seasonally adjusted",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 96,
            "series_count": 9
        },
        {
            "name": "sa",
            "group_id": "seas",
            "notes": "Seasonally adjusted",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 94,
            "series_count": 9
        },
        {
            "name": "financial",
            "group_id": "gen",
            "notes": "",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 70,
            "series_count": 6
        },
        {
            "name": "nonfinancial",
            "group_id": "gen",
            "notes": "",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 63,
            "series_count": 6
        },
        {
            "name": "domestic",
            "group_id": "gen",
            "notes": "",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 69,
            "series_count": 4
        },
        {
            "name": "foreign",
            "group_id": "gen",
            "notes": "",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 58,
            "series_count": 4
        },
        {
            "name": "asset-backed",
            "group_id": "gen",
            "notes": "",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 43,
            "series_count": 2
        },
        {
            "name": "companies",
            "group_id": "gen",
            "notes": "",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 49,
            "series_count": 1
        }
    ]
}
```

Get the FRED tags for a release. Optionally, filter results by tag name, tag group, or search. Series are assigned tags and releases. Indirectly through series, it is possible to get the tags for a release.

### HTTP Request

`GET https://api.stlouisfed.org/fred/release/tags`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
release_id | None | true | Integer | The id for a release. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
limit | 1000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
order_by | series_count | false | String | Order results by values of the specified attribute. | One of the following strings: 'series_count', 'popularity', 'created', 'name', 'group_id'.
sort_order | asc | false | String | Sort results is ascending or descending release date order. | One of the following strings: 'asc', 'desc'.
tag_names | No filter | false | Semicolon delimited string | A semicolon delimited list of tag names that series match all of. | None
tag_group_id | No Filter | false | String | A tag group id to filter tags by type. | One of the following: 'freq', 'gen', 'geo', 'geot', 'rls', 'seas', 'src'.
search_text | No Filter | false | String | The words to find matching tags with. | None

## Get Related Tags Within Release

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.category.getRelatedTagsForRelease(86)
  .then((res) => {
    console.log('Related Tags for Release', res);
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
    "count": 7,
    "offset": 0,
    "limit": 1000,
    "tags": [
        {
            "name": "commercial paper",
            "group_id": "gen",
            "notes": "",
            "created": "2012-03-19 10:40:59-05",
            "popularity": 55,
            "series_count": 2
        },
        {
            "name": "frb",
            "group_id": "src",
            "notes": "Board of Governors of the Federal Reserve System",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 90,
            "series_count": 2
        },
        {
            "name": "nation",
            "group_id": "geot",
            "notes": "Country Level",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 100,
            "series_count": 2
        },
        {
            "name": "usa",
            "group_id": "geo",
            "notes": "United States of America",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 100,
            "series_count": 2
        },
        {
            "name": "weekly",
            "group_id": "freq",
            "notes": "",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 82,
            "series_count": 2
        },
        {
            "name": "financial",
            "group_id": "gen",
            "notes": "",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 70,
            "series_count": 1
        },
        {
            "name": "nonfinancial",
            "group_id": "gen",
            "notes": "",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 63,
            "series_count": 1
        }
    ]
}
```

Get the related FRED tags for one or more FRED tags within a release. Optionally, filter results by tag group or search.

### HTTP Request

`GET https://api.stlouisfed.org/fred/release/related_tags`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
release_id | None | true | Integer | The id for a release. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
limit | 1000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
order_by | series_count | false | String | Order results by values of the specified attribute. | One of the following strings: 'series_count', 'popularity', 'created', 'name', 'group_id'.
sort_order | asc | false | String | Sort results is ascending or descending release date order. | One of the following strings: 'asc', 'desc'.
tag_names | No filter | false | Semicolon delimited string | A semicolon delimited list of tag names that series match all of. | None
exclude_tag_names | No filter | false | Semicolon delimited string | A semicolon delimited list of tag names that series match none of. | Parameter exclude_tag_names requires that parameter tag_names also be set to limit the number of matching series.
tag_group_id | No Filter | false | String | A tag group id to filter tags by type. | One of the following: 'freq', 'gen', 'geo', 'geot', 'rls', 'seas', 'src'.
search_text | No Filter | false | String | The words to find matching tags with. | None














## Get Tables Trees For Release

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.category.getTableTreesForRelease(86)
  .then((res) => {
    console.log('Table Trees for Release', res);
  })
  .catch((err) => {
    console.error('Error', err);
  })
```

> The above command returns JSON structured like this:

```json
{  
  {
  "name": "Personal consumption expenditures",
  "element_id": 12886,
  "release_id": "53",
  "elements": {
    "12887": {
      "element_id": 12887,
      "release_id": 53,
      "series_id": "DGDSRL1A225NBEA",
      "parent_id": 12886,
      "line": "3",
      "type": "series",
      "name": "Goods",
      "level": "1",
      "children": [
        {
          "element_id": 12888,
          "release_id": 53,
          "series_id": "DDURRL1A225NBEA",
          "parent_id": 12887,
          "line": "4",
          "type": "series",
          "name": "Durable goods",
          "level": "2",
          "children": [
            
          ]
        },
        {
          "element_id": 12889,
          "release_id": 53,
          "series_id": "DNDGRL1A225NBEA",
          "parent_id": 12887,
          "line": "5",
          "type": "series",
          "name": "Nondurable goods",
          "level": "2",
          "children": [
            
          ]
        }
      ]
    },
    "12888": {
      "element_id": 12888,
      "release_id": 53,
      "series_id": "DDURRL1A225NBEA",
      "parent_id": 12887,
      "line": "4",
      "type": "series",
      "name": "Durable goods",
      "level": "2",
      "children": [
        
      ]
    },
    "12889": {
      "element_id": 12889,
      "release_id": 53,
      "series_id": "DNDGRL1A225NBEA",
      "parent_id": 12887,
      "line": "5",
      "type": "series",
      "name": "Nondurable goods",
      "level": "2",
      "children": [
        
      ]
    },
    "12890": {
      "element_id": 12890,
      "release_id": 53,
      "series_id": "DSERRL1A225NBEA",
      "parent_id": 12886,
      "line": "6",
      "type": "series",
      "name": "Services",
      "level": "1",
      "children": [
        
      ]
    }
  }
}
```

Get release table trees for a given release. You can go directly to the tree structure by passing the appropriate element_id. You may also use a drill-down approach to start at the root (top most) element by leaving the element_id off.

### HTTP Request

`GET https://api.stlouisfed.org/fred/release/tables`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
release_id | None | true | Integer | The id for a release. | None
element_id | The root element for a release | false | Integer | The release table element id you would like to retrieve. | When the parameter is not passed, the root(top most) element for the release is given.
include_observation_values | 'false' | false | String | A flag to indicate that observations need to be returned. Observation value and date will only be returned for a series type element. | One of the following strings: 'true', 'false'.
observation_date | 9999-12-31 (latest available) | false | Date | The observation date to be included with the returned release table. | YYYY-MM-DD formatted string