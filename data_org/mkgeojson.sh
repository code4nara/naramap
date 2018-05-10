#!/bin/bash
# 公共施設データ
wget http://www.city.nara.lg.jp/www/contents/1481606664716/files/029201_public_facility_20170526.csv
#
nkf -u 029201_public_facility_20170526.csv > public_facility.csv
#
csv2geojson --lat 緯度 --lon 経度 public_facility.csv > public_facility.geojson
