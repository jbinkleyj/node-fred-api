# Categories

## Get A Category

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.category.getCategory(125)
  .then((res) => {
    console.log('Category', res);
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
            "id": 125,
            "name": "Trade Balance",
            "parent_id": 13
        }
    ]
}
```

Gets a category

### HTTP Request

`GET https://api.stlouisfed.org/fred/category/children`

### Query Parameters

Parameter | Default | Required | Type | Description
--------- | ------- | -------- | ---- | -----------
category_id | 0 | true | Integer | The id for a category.


## Get Child Categories

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

// Category ID => U.S. Trade & International Transactions

fred.category.getChildCategories(13)
  .then((res) => {
    console.log('Child Categories', res);
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
            "id": 16,
            "name": "Exports",
            "parent_id": 13
        },
        {
            "id": 17,
            "name": "Imports",
            "parent_id": 13
        },
        {
            "id": 3000,
            "name": "Income Payments & Receipts",
            "parent_id": 13
        },
        {
            "id": 125,
            "name": "Trade Balance",
            "parent_id": 13
        },
        {
            "id": 127,
            "name": "U.S. International Finance",
            "parent_id": 13
        }
    ]
}
```

Gets the child categories for a specified parent category.

### HTTP Request

`GET https://api.stlouisfed.org/fred/category/children`

### Query Parameters

Parameter | Default | Required | Type | Description
--------- | ------- | -------- | ---- | -----------
category_id | 0 | true | Integer | The id for a category.
realtime_start | Today's Date | false | Date | The start of the real-time period.
realtime_end | 9999-12-31 (latest available) | false | Date | The end of the real-time period.

## Get Related Categories

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

/*
Category ID 32073 has the parent-child category hierarchy:

Categories > Regional Data > Federal Reserve Districts > St. Louis > States in District

This category uses a related category to link to category ID 154 'Missouri' with hierarchy:

Categories > Regional Data > States > Missouri
*/

fred.category.getRelatedCategories(32073)
  .then((res) => {
    console.log('Related Categories', res);
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
            "id": 149,
            "name": "Arkansas",
            "parent_id": 27281
        },
        {
            "id": 150,
            "name": "Illinois",
            "parent_id": 27281
        },
        {
            "id": 151,
            "name": "Indiana",
            "parent_id": 27281
        },
        {
            "id": 152,
            "name": "Kentucky",
            "parent_id": 27281
        },
        {
            "id": 153,
            "name": "Mississippi",
            "parent_id": 27281
        },
        {
            "id": 154,
            "name": "Missouri",
            "parent_id": 27281
        },
        {
            "id": 193,
            "name": "Tennessee",
            "parent_id": 27281
        }
    ]
}
```

Get the related categories for a category. A related category is a one-way relation between 2 categories that is not part of a parent-child category hierarchy. Most categories do not have related categories

### HTTP Request

`GET https://api.stlouisfed.org/fred/category/related`

### Query Parameters

Parameter | Default | Required | Type | Description
--------- | ------- | -------- | ---- | -----------
category_id | 0 | true | Integer | The id for a category.
realtime_start | Today's Date | false | Date | The start of the real-time period.
realtime_end | 9999-12-31 (latest available) | false | Date | The end of the real-time period.

## Get Related Tags Within Category

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.category.getCategoryRelatedTags(125, {
  "tag_names": "services;quarterly"
})
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
    "realtime_start": "2013-08-13",
    "realtime_end": "2013-08-13",
    "order_by": "series_count",
    "sort_order": "desc",
    "count": 7,
    "offset": 0,
    "limit": 1000,
    "tags": [
        {
            "name": "balance",
            "group_id": "gen",
            "notes": "",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 65,
            "series_count": 4
        },
        {
            "name": "bea",
            "group_id": "src",
            "notes": "U.S. Department of Commerce: Bureau of Economic Analysis",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 87,
            "series_count": 4
        },
        {
            "name": "nation",
            "group_id": "geot",
            "notes": "Country Level",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 100,
            "series_count": 4
        },
        {
            "name": "usa",
            "group_id": "geo",
            "notes": "United States of America",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 100,
            "series_count": 4
        },
        {
            "name": "goods",
            "group_id": "gen",
            "notes": "",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 73,
            "series_count": 2
        },
        {
            "name": "nsa",
            "group_id": "seas",
            "notes": "Not seasonally adjusted",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 96,
            "series_count": 2
        },
        {
            "name": "sa",
            "group_id": "seas",
            "notes": "Seasonally adjusted",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 94,
            "series_count": 2
        }
    ]
}
```

Get the related FRED tags for one or more FRED tags within a category. FRED tags are attributes assigned to series. For this request, related FRED tags are the tags assigned to series that match all tags in the tag_names parameter, no tags in the exclude_tag_names parameter, and the category set by the category_id parameter.

### HTTP Request

`GET https://api.stlouisfed.org/fred/category/related_tags`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
category_id | 0 | true | Integer | The id for a category. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | 9999-12-31 (latest available) | false | Date | The end of the real-time period. | None
limit | 1000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
order_by | series_count | false | String | Order results by values of the specified attribute. | One of the following strings: 'series_count', 'popularity', 'created', 'name', 'group_id'.
sort_order | asc | false | String | Sort results is ascending or descending order for attribute values specified by order_by. | One of the following strings: 'asc', 'desc'.

## Get Series Within Category

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.category.getCategorySeries(125)
  .then((res) => {
    console.log('Series for Category', res);
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
    "count": 24,
    "offset": 0,
    "limit": 1000,
    "series": [
        {
            "id": "BOPBCA",
            "realtime_start": "2013-08-13",
            "realtime_end": "2013-08-13",
            "title": "Balance on Current Account",
            "observation_start": "1960-01-01",
            "observation_end": "2013-01-01",
            "frequency": "Quarterly",
            "frequency_short": "Q",
            "units": "Billions of Dollars",
            "units_short": "Bil. of $",
            "seasonal_adjustment": "Seasonally Adjusted",
            "seasonal_adjustment_short": "SA",
            "last_updated": "2013-07-09 08:46:45-05",
            "popularity": 64
        },
        {
            "id": "BOPBCAA",
            "realtime_start": "2013-08-13",
            "realtime_end": "2013-08-13",
            "title": "Balance on Current Account",
            "observation_start": "1960-01-01",
            "observation_end": "2012-01-01",
            "frequency": "Annual",
            "frequency_short": "A",
            "units": "Billions of Dollars",
            "units_short": "Bil. of $",
            "seasonal_adjustment": "Not Seasonally Adjusted",
            "seasonal_adjustment_short": "NSA",
            "last_updated": "2013-07-09 08:46:21-05",
            "popularity": 43
        },
        {
            "id": "BOPBCAN",
            "realtime_start": "2013-08-13",
            "realtime_end": "2013-08-13",
            "title": "Balance on Current Account",
            "observation_start": "1960-01-01",
            "observation_end": "2013-01-01",
            "frequency": "Quarterly",
            "frequency_short": "Q",
            "units": "Billions of Dollars",
            "units_short": "Bil. of $",
            "seasonal_adjustment": "Not Seasonally Adjusted",
            "seasonal_adjustment_short": "NSA",
            "last_updated": "2013-07-09 08:46:50-05",
            "popularity": 37
        },
        {
            "id": "BOPBGS",
            "realtime_start": "2013-08-13",
            "realtime_end": "2013-08-13",
            "title": "Balance on Goods and Services",
            "observation_start": "1960-01-01",
            "observation_end": "2013-01-01",
            "frequency": "Quarterly",
            "frequency_short": "Q",
            "units": "Billions of Dollars",
            "units_short": "Bil. of $",
            "seasonal_adjustment": "Seasonally Adjusted",
            "seasonal_adjustment_short": "SA",
            "last_updated": "2013-07-09 08:46:25-05",
            "popularity": 38
        }
    ]
}
```

Get the series in a category.

### HTTP Request

`GET https://api.stlouisfed.org/fred/category/series`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
category_id | 0 | true | Integer | The id for a category. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
limit | 1000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
order_by | series_count | false | String | Order results by values of the specified attribute. | One of the following strings: 'series_id', 'title', 'units', 'frequency', 'seasonal_adjustment', 'realtime_start', 'realtime_end', 'last_updated', 'observation_start', 'observation_end', 'popularity'.
sort_order | asc | false | String | Sort results is ascending or descending order for attribute values specified by order_by. | One of the following strings: 'asc', 'desc'.
filter_variable | No filter | false | String | The attribute to filter results by. | On of the following strings: 'frequency', 'units', 'seasonal_adjustment'.
filter_value | No filter | false | String | The value of the filter_variable attribute to filter results by. | None
tag_names | No filter | false | Semicolon delimited string | A semicolon delimited list of tag names that series match all of. | None
exclude_tag_names | No filter | false | Semicolon delimited string | A semicolon delimited list of tag names that series match none of. | Parameter exclude_tag_names requires that parameter tag_names also be set to limit the number of matching series.

## Get Tags for a Category

```javascript
import Fred from 'node-fred';

const fred = new Fred(API_KEY);

fred.category.getCategoryTags(125)
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
    "realtime_start": "2013-08-13",
    "realtime_end": "2013-08-13",
    "order_by": "series_count",
    "sort_order": "desc",
    "count": 21,
    "offset": 0,
    "limit": 1000,
    "tags": [
        {
            "name": "bea",
            "group_id": "src",
            "notes": "U.S. Department of Commerce: Bureau of Economic Analysis",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 87,
            "series_count": 24
        },
        {
            "name": "nation",
            "group_id": "geot",
            "notes": "Country Level",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 100,
            "series_count": 24
        },
        {
            "name": "usa",
            "group_id": "geo",
            "notes": "United States of America",
            "created": "2012-02-27 10:18:19-06",
            "popularity": 100,
            "series_count": 24
        }
    ]
}
```

Get the FRED tags for a category. Optionally, filter results by tag name, tag group, or search. Series are assigned tags and categories.

### HTTP Request

`GET https://api.stlouisfed.org/fred/category/tags`

### Query Parameters

Parameter | Default | Required | Type | Description | Restrictions
--------- | ------- | -------- | ---- | ----------- | ------------
category_id | 0 | true | Integer | The id for a category. | None
realtime_start | Today's Date | false | Date | The start of the real-time period. | None
realtime_end | Today's Date | false | Date | The end of the real-time period. | None
limit | 1000 | false | Integer | The maximum number of results to return | Must be an integer between 1 and 1000
offset | 0 | false | Integer | A non negative integer | A non negative integer
order_by | series_count | false | String | Order results by values of the specified attribute. | One of the following strings: 'series_count', 'popularity', 'created', 'name', 'group_id'.
sort_order | asc | false | String | Sort results is ascending or descending order for attribute values specified by order_by. | One of the following strings: 'asc', 'desc'.
tag_names | No Filter | false | Semicolon delimited string | A semicolon delimited list of tag names that series match all of. | None
tag_group_id | No Filter | false | String | A tag group id to filter tags by type. | One of the following: 'freq', 'gen', 'geo', 'geot', 'rls', 'seas', 'src'.
search_text | No Filter | false | String | The words to find matching tags with. | None