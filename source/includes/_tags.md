# Tags

## Get All Tags

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.tags.getAllTags()
  .then((res) => {
    console.log('Tags', res);
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
    "count": 4794,
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
            "name": "oecd",
            "group_id": "src",
            "notes": "Organisation for Economic Co-operation and Development",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 76,
            "series_count": 61488
        }
    ...
    ]
}
```

Get FRED tags. Optionally, filter results by tag name, tag group, or search.

### HTTP Request

`GET https://api.stlouisfed.org/fred/tags`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
limit | 1000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
order_by | series_count | false | String | Order results by values of the specified attribute. | One of the following strings: 'series_count', 'popularity', 'created', 'name', 'group_id'.
sort_order | asc | false | String | Sort results is ascending or descending order for attribute values specified by order_by. | One of the following strings: 'asc', 'desc'.
search_text | "" | false | String | The words to find matching tags with. | None
tag_names | No filter | false | Semicolon delimited string | A semicolon delimited list of tag names that series match all of. | None
tag_group_id | No Filter | false | String | A tag group id to filter tags by type. | One of the following: 'freq', 'gen', 'geo', 'geot', 'rls', 'seas', 'src'.


## Get All Series Matching Tags

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.tags.getAllSeriesMatchingTags('slovenia;food;oecd')
  .then((res) => {
    console.log('Series Matching Tags', res);
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
    "order_by": "series_id",
    "sort_order": "asc",
    "count": 18,
    "offset": 0,
    "limit": 1000,
    "seriess": [
        {
            "id": "CPGDFD02SIA657N",
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "title": "Consumer Price Index: Total Food Excluding Restaurants for Slovenia",
            "observation_start": "1996-01-01",
            "observation_end": "2012-01-01",
            "frequency": "Annual",
            "frequency_short": "A",
            "units": "Growth Rate Previous Period",
            "units_short": "Growth Rate Previous Period",
            "seasonal_adjustment": "Not Seasonally Adjusted",
            "seasonal_adjustment_short": "NSA",
            "last_updated": "2013-07-24 02:07:00-05",
            "popularity": 0,
            "notes": "OECD descriptor ID: CPGDFD02\nOECD unit ID: GP\nOECD country ID: SVN\n\nAll OECD data should be cited as follows: OECD, \"Main Economic Indicators - complete database\", Main Economic Indicators (database),http://dx.doi.org/10.1787/data-00052-en (Accessed on date)\nCopyright OECD. Reprinted with permission."
        },
        {
            "id": "CPGDFD02SIA659N",
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "title": "Consumer Price Index: Total Food Excluding Restaurants for Slovenia",
            "observation_start": "1996-01-01",
            "observation_end": "2000-01-01",
            "frequency": "Annual",
            "frequency_short": "A",
            "units": "Growth Rate Same Period Previous Year",
            "units_short": "Growth Rate Same Period Previous Yr.",
            "seasonal_adjustment": "Not Seasonally Adjusted",
            "seasonal_adjustment_short": "NSA",
            "last_updated": "2013-08-12 00:14:01-05",
            "popularity": 0,
            "notes": "OECD descriptor ID: CPGDFD02\nOECD unit ID: GY\nOECD country ID: SVN\n\nAll OECD data should be cited as follows: OECD, \"Main Economic Indicators - complete database\", Main Economic Indicators (database),http://dx.doi.org/10.1787/data-00052-en (Accessed on date)\nCopyright OECD. Reprinted with permission."
        },
        {
            "id": "CPGDFD02SIM657N",
            "realtime_start": "2013-08-14",
            "realtime_end": "2013-08-14",
            "title": "Consumer Price Index: Total Food Excluding Restaurants for Slovenia",
            "observation_start": "1996-01-01",
            "observation_end": "2013-05-01",
            "frequency": "Monthly",
            "frequency_short": "M",
            "units": "Growth Rate Previous Period",
            "units_short": "Growth Rate Previous Period",
            "seasonal_adjustment": "Not Seasonally Adjusted",
            "seasonal_adjustment_short": "NSA",
            "last_updated": "2013-07-24 17:24:28-05",
            "popularity": 0,
            "notes": "OECD descriptor ID: CPGDFD02\nOECD unit ID: GP\nOECD country ID: SVN\n\nAll OECD data should be cited as follows: OECD, \"Main Economic Indicators - complete database\", Main Economic Indicators (database),http://dx.doi.org/10.1787/data-00052-en (Accessed on date)\nCopyright OECD. Reprinted with permission."
        }
    ...
    ]
}
```

Get the series matching all tags in the tag_names parameter and no tags in the exclude_tag_names parameter.

### HTTP Request

`GET https://api.stlouisfed.org/fred/tags/series`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
tag_names | None | true | Semicolon delimited string | A semicolon delimited list of tag names that series match all of. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
limit | 1000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
order_by | series_id | false | String | Order results by values of the specified attribute. | One of the following strings: 'series_id', 'title', 'units', 'frequency', 'seasonal_adjustment', 'realtime_start', 'realtime_end', 'last_updated', 'observation_start', 'observation_end', 'popularity'.
sort_order | asc | false | String | Sort results is ascending or descending order for attribute values specified by order_by. | One of the following strings: 'asc', 'desc'.
search_text | "" | false | String | The words to find matching tags with. | None
exclude_tag_names | No filter | false | Semicolon delimited string | A semicolon delimited list of tag names that series match none of. | None