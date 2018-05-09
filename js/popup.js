///////////////////////////////////////////////////////////////////////////////////
//  ポップアップコンテンツ
//////////////////////////////////////////////////////////////////////////////////

////////
//  ポップアップ表示用htmlテンプレート  下記部分のみで文字列の変更が可能
////////

//  多目的トイレ用ポップアップテンプレート
TemplatePopup_Toilet = '<div class="leaflet-popup-content" style="width: 266px;">'
                     + 'TOILET_NAME'              // トイレ名称（TemplateParts_Name）
                     + 'TOILET_SUMMERY'　         // トイレ説明（TemplateParts_Summry）
                     + 'TOILET_PHOTO1'            //  画像（TemplateParts_PhotoL ）
                     + '<div class="wc-area clearfix">'
                     + 'TOILET_PROP_ICON'         //  トイレ機能アイコン（TemplateParts_PropIcon）
                     + 'TOILET_360PHOTO'          //  360度画像へのリンク（TemplateParts_360photo）
                     + "'</div>\n"
                     + 'TOILET_DESCRIBE'          // トイレの説明（階数など）（TemplateParts_360photo）
                     + 'TOILET_ROUTE_SEARCH'
                     + "</div>\n";

//差し替えパラメータ


//  地点情報用ポップアップテンプレー
TemplatePopup_POI = '<div class="leaflet-popup-content" style="width: 266px;">'
                   + 'POI_NAME'              //  地点名称
                   + 'POI_SUMMERY'           //  地点説明（TemplateParts_Summry）
                   + 'POI_PHOTO1'            //  地点画像１（TemplateParts_PhotoL ）
                   + 'POI_ITEMS'          //  詳細情報テーブル(TemplatePopup_ITEMS)
                   + 'POI_DESCRIBE'　　　　  //  詳細説明（Remarks用予備）　　　
                   + 'POI_ROUTE_SEARCH'      //  ルート検索ボタン
                   + "</div>\n";

//  詳細情報テーブル
TemplatePopup_ITEMS = '<table class="popup-item">'
                    + 'POI_OPENINGTIME'    //  営業時間
                    + 'POI_HOLIDAY'        //  休日
                    + 'POI_PRICE'          //  価格
                    + 'POI_ADDRESS'        //  住所
                    + 'POI_TEL'     　     //  電話番号
                    + 'POI_FAX'     　     //  FAX番号
                    + 'POI_LINK'     　    //  リンク
                    + 'POI_SORT'     　    //  業種
                    + "</table>\n";     

////
//  テンプレート部品
////
//  名称
TemplateParts_Name     = '<h3 class="popup-title">POPUP_NAME</h3>';
//  サマリ（説明）表示
TemplateParts_Summery  = '<p class="popup-note">POPUP_SUMMERY</p>';
//  トイレアイコン
TemplateParts_PropIcon  = '<div class="wcicon">POPUP_TOILET_PROP_ICON</div>';
//  トイレ360画像
TemplateParts_360photo  = '<div class="wc360">POPUP_TOILET_360PHOTO</div>';
//  補足表示
TemplateParts_Remarks  = '<p class="popup-note">POPUP_REMARKS</p>';
//  階数表示
TemplateParts_Floor    = '<p>階数：POPUP_FLOOR_LEVEL</p>';
//  写真部品（標準）
TemplateParts_PhotoL   = '<div class="popup-photo"><img src="POPUP_PHOTO" width="265" height="176"></div>';
//  写真部品（施設）
TemplateParts_PhotoS   = '<div class="popup-photo_shisetu"><img src="POPUP_PHOTO"></div>';

//  施設詳細情報
TemplateParts_Link     = '<a href="POPUP_URLLINK" target="_brank">POPUP_URLTITLE</a>';
TemplateParts_Discount = '<br>障害者手帳割引：POPUP_DISCOUNT';

TemplateItem_OpeningTime = '<tr><th>営業時間：</th><td>POPUP_OPEN～POPUP_CLOSE</td></tr>';
TemplateItem_Holiday  = '<tr><th>定休日：</th><td>POPUP_HOLIDAY</td></tr>';
TemplateItem_Price    = '<tr><th>入場費用：</th><td>POPUP_PRICE</td></tr>';
TemplateItem_Address  = '<tr><th>所在地：</th><td>POPUP_ADDRESS</td></tr>';
TemplateItem_FAX      = '<tr><th>ＦＡＸ：</th><td>POPUP_FAX</td></tr>';
TemplateItem_TEL      = '<tr><th>電話番号：</th><td>POPUP_TEL</td></tr>';
TemplateItem_URL      = '<tr><th>ＵＲＬ：</th><td>POPUP_LINK</td></tr>';
TemplateItem_Sort     = '<tr><th>業種：</th><td>POPUP_SORT</td></tr>';

////
//  TOILET_PROPATY_ICON で利用
////
//  トイレ機能アイコン
TemplateParts_WC_Icon  = '<img src="POPUP_WC_ICON">';

////
//  TOILET_360PHOTO で利用
////
//  ３６０度画像リンク表示
TemplateParts_360Photo = '<div class="wc360"><a href="POPUP_360PHOTO" target="_blank">360°写真</a></div>';

//  ルート検索
TemplateParts_RouteSearch = '<form name="routeSearch"><input class="popup-btn" type="button" name="route" value="ここに行く" onclick="SearchWheelChairRoute( SEARCH_GEOMETRY_POINT )">'

TemplateParts_WCRouteSearch = '&nbsp;&nbsp;<input class="popup-btn" type="button" name="route" value="車椅子でここに行く" onclick="SearchWheelChairRoute( SEARCH_GEOMETRY_POINT )"></form>'

////////
//  ポップアップ制御関数
////////

////
// Popup for WC
// 多目的トイレ
function onEachFeatureWC(feature, layer) {
	popupContent = setPopupContentWC(feature);
  layer.bindPopup(popupContent);
}

//  PopupContent for the WC
function setPopupContentWC(feature){ 
//  console.log( "setPopupContentWC()" );
  var popupContent = TemplatePopup_Toilet 
  var popupParts = "" ;

  if ( feature.properties ){
	  //  Name
	  if ( feature.properties.Name !== undefined ){
	    popupParts = TemplateParts_Name.replace( "POPUP_NAME" , feature.properties.Name );
    }else{
	    popupParts = TemplateParts_Name.replace( "POPUP_NAME" , "No Name" );
    }
    popupContent = popupContent.replace("TOILET_NAME", popupParts );

	  //  Summery
	  if ( feature.properties.Summery !== undefined ){
	    popupParts = TemplateParts_Summery.replace( "POPUP_SUMMERY" , feature.properties.Summery );
    }else{
	    popupParts = "";
    }
    popupContent = popupContent.replace("TOILET_SUMMERY", popupParts );
    
	  //  Photo1
    if ( feature.properties.Photo1 !== undefined ){
      popupParts = TemplateParts_PhotoL.replace("POPUP_PHOTO", feature.properties.Photo1 );
	  }else{
      popupParts = TemplateParts_PhotoL.replace("POPUP_PHOTO", DEF_NOPHOTO );
	  }
    popupContent = popupContent.replace("TOILET_PHOTO1", popupParts );

	  //  Toilet Property Icon 
    popupParts = "";
    if ( feature.properties.babyseat === "y" ){
      popupParts += TemplateParts_WC_Icon.replace( "POPUP_WC_ICON", IconToiletBabyseat );
    }
	  if ( feature.properties.ostomate === "y" ){
      popupParts += TemplateParts_WC_Icon.replace( "POPUP_WC_ICON", IconToiletOstomate );
	  }
	  if ( feature.properties.nursingbed === "y" ){
      popupParts += TemplateParts_WC_Icon.replace( "POPUP_WC_ICON", IconToiletNursingbed );
	  }
	  if ( feature.properties.washlet === "y" ){
      popupParts += TemplateParts_WC_Icon.replace( "POPUP_WC_ICON", IconToiletWashlet );
	  }
	  if ( feature.properties.rotation === "y" ){
      popupParts += TemplateParts_WC_Icon.replace( "POPUP_WC_ICON", IconToiletRotation  );
	  }
	  if ( feature.properties.emergencycall === "y" ){
      popupParts += TemplateParts_WC_Icon.replace( "POPUP_WC_ICON", IconToiletEmergencycall );
	  }
    popupContent = popupContent.replace("TOILET_PROP_ICON",
                                        TemplateParts_PropIcon.replace("POPUP_TOILET_PROP_ICON", popupParts ));  
    
	  //  Toilet 360 Photo
	  if ( feature.properties.Photo360 !== undefined ){
      popupParts = TemplateParts_360Photo.replace( "POPUP_360PHOTO", feature.properties.Photo360 );
	  }else{
      popupParts = "";
    }
    popupContent =  popupContent.replace("TOILET_360PHOTO", popupParts );

	  //  Toilet Describe
		var popupDescribe = "";
    //  FLOOR
	  if ( feature.properties.Floor !== undefined ){
	    popupDescribe += TemplateParts_Floor.replace( "POPUP_FLOOR_LEVEL" , feature.properties.Floor );
	  }
    popupContent = popupContent.replace("TOILET_DESCRIBE", popupDescribe );

    //  RouteSearch
    var popupRouteSearch = "";
    popupRouteSearch += TemplateParts_RouteSearch.replace( "SERARH_GEOMETRY_POINT", feature.geometry.coordinates  );
//    popupRouteSearch += TemplateParts_WCRouteSearch.replace( "SERARH_GEOMETRY_POINT", feature.geometry.coordinates  );
    popupContent = popupContent.replace("TOILET_ROUTE_SEARCH", popupRouteSearch );
  }else{
	  popupContent = '<h3>No Data</h3><hr class="full"><p>Sorry</p>';
  }

//  console.log( popupContent );
  return( popupContent );
} 
////
//  Popup for POI (except WC)
function onEachFeaturePOI(feature, layer) {
  popupContent = setPopupContentPOI(feature, layer);
//  console.log( "popupContent: "+popupContent );

//    window.alert (popupContent);
  layer.bindPopup(popupContent);
}

//  PopupContent for the Information 
function setPopupContentPOI(feature, layer) {
//  console.log( "setPopupContentPOI()" );
  var popupContent=TemplatePopup_POI ;
  var popupParts = "" ;

  //  Place Name
  if ( feature.properties ){
	  //  Name
	  if (( feature.properties.名称 !== undefined )&&( feature.properties.名称 != "" )){
	    popupParts = TemplateParts_Name.replace( "POPUP_NAME" , feature.properties.名称 );
    }else{
	    popupParts = TemplateParts_Name.replace( "POPUP_NAME" , "No Name" );
    }
    popupContent = popupContent.replace("POI_NAME", popupParts );

	  //  Summery
	  if (( feature.properties.Summery !== undefined )&&( feature.properties.Summery != "" )){
	    popupParts = TemplateParts_Summery.replace( "POPUP_SUMMERY" , feature.properties.Summery );
    }else{
	    popupParts = "";
    }
    popupContent = popupContent.replace("POI_SUMMERY", popupParts );

    //  Photo Image (1)
	  if (( feature.properties.Photo1 !== undefined )&&( feature.properties.Photo1 != "" )){
      popupParts = TemplateParts_PhotoL.replace("POPUP_PHOTO", feature.properties.Photo1 );
	  }else{
      popupParts = "";
	  }
    popupContent = popupContent.replace("POI_PHOTO1", popupParts );
    //  Photo Image (2)
	  if (( feature.properties.Photo2 !== undefined )&&( feature.properties.Photo2 != "" )){
      popupParts = TemplateParts_Photo.replace("POPUP_PHOTO", feature.properties.Photo2 );
	  }else{
      popupParts = "";
    }
    popupContent = popupContent.replace("POI_PHOTO2", popupParts );

	  //  Item Table
    popupBlock = TemplatePopup_ITEMS;
    {
      // Opening times
      if ( (feature.properties.Open !== undefined ) && (feature.properties.Close !== undefined ) ){    		
	      popupParts = TemplateItem_OpeningTime.replace( "POPUP_OPEN" , feature.properties.Open  );
	      popupParts = popupParts.replace( "POPUP_CLOSE" , feature.properties.Close );
      }else{
	      popupParts = "";
      }
      popupBlock = popupBlock.replace("POI_OPENINGTIME", popupParts );

      // Holiday
      if ( feature.properties.Holiday !== undefined ){
	      popupParts = TemplateItem_Holiday.replace( "POPUP_HOLIDAY" , feature.properties.Holiday  );
      }else{
	      popupParts = "";
      }
      popupBlock = popupBlock.replace("POI_HOLIDAY", popupParts );

      // Price fee
      if ( feature.properties.Price !== undefined ) {
	      popupParts = TemplateItem_Price.replace( "POPUP_PRICE" , feature.properties.Price );
      }else{
	      popupParts = "";
      }
      popupBlock = popupBlock.replace("POI_PRICE", popupParts );

      // 住所／所在地
      if ( feature.properties.住所 !== undefined ) {
	      popupParts = TemplateItem_Address.replace( "POPUP_ADDRESS" , feature.properties.住所  );
      }else{
	      popupParts = "";
      }
      popupBlock = popupBlock.replace("POI_ADDRESS", popupParts );

      // TEL
      if ( feature.properties.電話番号 !== undefined ) {
	      popupParts = TemplateItem_TEL.replace( "POPUP_TEL" , feature.properties.電話番号  );
      }else{
	      popupParts = "";
      }
      popupBlock = popupBlock.replace("POI_TEL", popupParts );

      // FAX
      if ( feature.properties.FAX !== undefined ) {
	      popupParts = TemplateItem_FAX.replace( "POPUP_FAX" , feature.properties.FAX  );
      }else{
	      popupParts = "";
      }
      popupBlock = popupBlock.replace("POI_FAX", popupParts );

      // LINK
      if ( feature.properties.URL !== undefined ) {
	      popupParts = TemplateParts_Link.replace( "POPUP_URLLINK" , feature.properties.URL );
	      popupParts = popupParts.replace( "POPUP_URLTITLE" , feature.properties.URL );
	      popupParts = TemplateItem_URL.replace( "POPUP_LINK" , popupParts  );
      }else{
	      popup = "";
      }
      popupBlock = popupBlock.replace("POI_LINK", popupParts );

      // 業種
     popupParts = "";
      if ( feature.properties.業種 !== undefined ) {
        var sort= feature.properties.業種 ; 
	      popupParts = TemplateItem_Sort.replace( "POPUP_SORT" , sort );
      }else{
	      popupParts = "";
      }
      popupBlock = popupBlock.replace("POI_SORT", popupParts );
    }
    popupContent = popupContent.replace("POI_ITEMS", popupBlock );

	  //  Remarks
	  if (( feature.properties.Remarks !== undefined )&&( feature.properties.Remarks != "" )){
	    popupParts = TemplateParts_Remarks.replace( "POPUP_REMARKS" , feature.properties.Remarks );
    }else{
	    popupParts = "";
    }
    popupContent = popupContent.replace("POI_DESCRIBE", popupParts );

    //  RouteSearch
    popupParts  = "";
/*
    popupParts  = TemplateParts_RouteSearch.replace( "SERARH_GEOMETRY_POINT", feature.geometry.coordinates );
    popupParts += TemplateParts_WCRouteSearch.replace( "SERARH_GEOMETRY_POINT", feature.geometry.coordinates  );
*/
    popupContent = popupContent.replace("POI_ROUTE_SEARCH", popupParts );
	}

//  console.log( "kokoInfo : "+ popupContent );
  return( popupContent );
}

