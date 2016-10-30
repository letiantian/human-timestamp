# human-timestamp

Cli to convert timestamp to readable date.

## Install
```
$ npm install -g human-timestamp
```

## Usage

```
$ human-timestamp 0
1970-01-01 08:00:00

$ human-timestamp 1
1970-01-01 08:00:01

$ human-timestamp 1000 --ms
1970-01-01 08:00:01

$ human-timestamp 1444222222
2015-10-07 20:50:22

$ human-timestamp 1444222222 -h YYYY
2015
```


## License
MIT