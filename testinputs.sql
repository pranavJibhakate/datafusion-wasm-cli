CREATE EXTERNAL TABLE lineitem STORED AS PARQUET LOCATION 'https://shell.duckdb.org/data/tpch/0_01/parquet/lineitem.parquet';
select * from lineitem limit 1;
select * from lineitem limit 2;
select * from lineitem limit 3;