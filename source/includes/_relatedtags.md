# Related Tags

## Get Related Tags

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.category.getAllRelatedTags('monetary+aggregates;weekly')
  .then((res) => {
    console.log('Related Tags', res);
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
            "name": "nation",
            "group_id": "geot",
            "notes": "Country Level",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 100,
            "series_count": 12
        },
        {
            "name": "usa",
            "group_id": "geo",
            "notes": "United States of America",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 100,
            "series_count": 12
        },
        {
            "name": "frb",
            "group_id": "src",
            "notes": "Board of Governors of the Federal Reserve System",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 90,
            "series_count": 10
        },
        {
            "name": "nsa",
            "group_id": "seas",
            "notes": "Not seasonally adjusted",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 96,
            "series_count": 6
        },
        {
            "name": "sa",
            "group_id": "seas",
            "notes": "Seasonally adjusted",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 94,
            "series_count": 6
        },
        {
            "name": "m1",
            "group_id": "gen",
            "notes": "M1 Money Stock",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 71,
            "series_count": 4
        },
        {
            "name": "m2",
            "group_id": "gen",
            "notes": "M2 Money Stock",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 75,
            "series_count": 4
        },
        {
            "name": "currency",
            "group_id": "gen",
            "notes": "",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 74,
            "series_count": 2
        },
        {
            "name": "discontinued",
            "group_id": "gen",
            "notes": "",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 68,
            "series_count": 2
        },
        {
            "name": "frb stl",
            "group_id": "src",
            "notes": "Federal Reserve Bank of St. Louis (source)",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 81,
            "series_count": 2
        },
        {
            "name": "h6",
            "group_id": "rls",
            "notes": "H.6 Money Stock Measures",
            "created": "2012-08-16 15:21:17-05",
            "popularity": 41,
            "series_count": 2
        },
        {
            "name": "m3",
            "group_id": "gen",
            "notes": "M3 Money Stock",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 50,
            "series_count": 2
        },
        {
            "name": "mzm",
            "group_id": "gen",
            "notes": "MZM Money Stock",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 61,
            "series_count": 2
        }
    ]
}
```

Get the related FRED tags for one or more FRED tags. Optionally, filter results by tag group or search.

FRED tags are attributes assigned to series. Related FRED tags are the tags assigned to series that match all tags in the tag_names parameter and no tags in the exclude_tag_names parameter.

### HTTP Request

`GET https://api.stlouisfed.org/fred/related_tags`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
tag_names | None | true | Semicolon delimited string | A semicolon delimited list of tag names that series match all of. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
limit | 1000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
order_by | series_count | false | String | Order results by values of the specified attribute. | One of the following strings: 'series_count', 'popularity', 'created', 'name', 'group_id'.
sort_order | asc | false | String | Sort results is ascending or descending order for attribute values specified by order_by. | One of the following strings: 'asc', 'desc'.
tag_group_id | No Filter | false | String | A tag group id to filter tags by type. | One of the following: 'freq', 'gen', 'geo', 'geot', 'rls', 'seas', 'src'.
search_text | No Filter | false | String | The words to find matching tags with. | None

