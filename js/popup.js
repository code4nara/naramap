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


//  地点情報用ポップアップテンプレート（注意／警告／バス停／スタート／ゴール）
TemplatePopup_Info = '<div class="leaflet-popup-content" style="width: 266px;">'
                + 'INFO_NAME'              //  地点名称
                + 'INFO_ITEM_BLOCK'  　　  //  
                + 'INFO_ROUTE_SEARCH'      //  ルート検索ボタン
                + "</div>\n";

//  詳細情報テーブル
TemplatePopup_ITEMS = '<table class="popup-item">POI_ITEMS</table>\n';     
TemplateItems_Parts = '<tr><th>ITEM_KEY</th><td>ITEM_VALUE</td></tr>';

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
TemplateItem_Price    = '<tr><th>入場費用：</th><td>POPUP_PRICE POPUP_DISCOUNT</td></tr>';
TemplateItem_FAX      = '<tr><th>ＦＡＸ：</th><td>POPUP_FAX</td></tr>';
TemplateItem_FAX      = '<tr><th>ＦＡＸ：</th><td>POPUP_FAX</td></tr>';
TemplateItem_TEL      = '<tr><th>電話番号：</th><td>POPUP_TEL</td></tr>';
TemplateItem_FAX      = '<tr><th>ＦＡＸ：</th><td>POPUP_FAX</td></tr>';
TemplateItem_URL      = '<tr><th>ＵＲＬ：</th><td>POPUP_LINK</td></tr>';

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
TemplateParts_RouteSearch = '<form name="routeSearch"><input class="popup-btn" type="button" name="route" value="ここに行く" onclick="SearchWheelChairRoute( SEARCH_GEOMETRY_POINT )"></form>'

TemplateParts_WCRouteSearch = '<form name="routeSearch"><input class="popup-btn" type="button" name="route" value="車椅子でここに行く" onclick="SearchWheelChairRoute( SEARCH_GEOMETRY_POINT )"></form>'

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
//  Popup for POI (except WC/Info)
function onEachFeaturePOI(feature, layer) {
  popupContent = setPopupContentInfo(feature);
  console.log( "popupContent: "+popupContent );

//    window.alert (popupContent);
  layer.bindPopup(popupContent);
}

//  PopupContent for the Information 
function setPopupContentInfo(feature) {
//  console.log( "setPopupContentInfo()" );
  var popupContent=TemplatePopup_Info ;
  var popupParts = "" ;
  var popupBlock = "" ;

  if ( feature.properties ){
	  if (( feature.properties.名称 !== undefined )&&( feature.properties.名称 != "" )){
              	    popupParts = TemplateParts_Name.replace( "POPUP_NAME" , feature.properties.名称 );
    }else{
	    popupParts = TemplateParts_Name.replace( "POPUP_NAME" , "No Name" );
    }
    popupContent = popupContent.replace("INFO_NAME", popupParts );

    Object.keys( feature.properties ).forEach(function(key) {
      var value = this[key];
      switch( key ){
        case "名称" :
        case "名称_カナ" :
        case "NO" :
        case "﻿都道府県コード又は市区町村コード" :
        case "都道府県名" :
          break;
        default:
          if ( value !== "" ){
            //  console.log([key, ':', value].join(' '));
	          popupParts = TemplateItems_Parts.replace( "ITEM_KEY" , key );
	          popupParts = popupParts.replace( "ITEM_VALUE" , value );
            popupBlock += popupParts;
          }
      }
    }, feature.properties );

    console.log( "block : " + popupBlock );
    console.log( "----" );
    console.log( "temp : " + TemplatePopup_ITEMS );

    popupParts = TemplatePopup_ITEMS.replace( "POI_ITEMS", popupBlock );
    popupContent = popupContent.replace("INFO_ITEM_BLOCK", popupParts );

    //  RouteSearch
    popupParts  = TemplateParts_RouteSearch.replace( "SERARH_GEOMETRY_POINT", feature.geometry.coordinates  );
    popupParts += TemplateParts_WCRouteSearch.replace( "SERARH_GEOMETRY_POINT", feature.geometry.coordinates  );
    popupContent = popupContent.replace("INFO_ROUTE_SEARCH", popupParts );
  }

  return( popupContent );
}

/*
      if ( value !== "" ){
	      popupParts = TemplateItems_Parts.replace( "ITEM_KEY" , key );
	      popupParts = popupParts.replace( "ITEM_VALUE" , value );
        popupBlock += popupParts;
      }
    popupContent = popupBlock ;
*/
/*
	  //  Name
	  //  Summery
	  if (( feature.properties.Summery !== undefined )&&( feature.properties.Summery != "" )){
	    popupParts = TemplateParts_Summery.replace( "POPUP_SUMMERY" , feature.properties.Summery );
    }else{
	    popupParts = "";
    }
    popupContent = popupContent.replace("INFO_SUMMERY", popupParts );

    //  Photo Image (1)
	  if (( feature.properties.Photo1 !== undefined )&&( feature.properties.Photo1 != "" )){
      popupParts = TemplateParts_PhotoL.replace("POPUP_PHOTO", feature.properties.Photo1 );
	  }else{
      popupParts = "";
	  }
    popupContent = popupContent.replace("INFO_PHOTO1", popupParts );
    //  Photo Image (2)
	  if (( feature.properties.Photo2 !== undefined )&&( feature.properties.Photo2 != "" )){
      popupParts = TemplateParts_Photo.replace("POPUP_PHOTO", feature.properties.Photo2 );
	  }else{
      popupParts = "";
    }
    popupContent = popupContent.replace("INFO_PHOTO2", popupParts );

	  //  Remarks
	  if (( feature.properties.Remarks !== undefined )&&( feature.properties.Remarks != "" )){
	    popupParts = TemplateParts_Remarks.replace( "POPUP_REMARKS" , feature.properties.Remarks );
    }else{
	    popupParts = "";
    }
    popupContent = popupContent.replace("INFO_DESCRIBE", popupParts );

    //  RouteSearch
    popupParts  = TemplateParts_RouteSearch.replace( "SERARH_GEOMETRY_POINT", feature.geometry.coordinates  );
    popupParts += TemplateParts_WCRouteSearch.replace( "SERARH_GEOMETRY_POINT", feature.geometry.coordinates  );
    popupContent = popupContent.replace("INFO_ROUTE_SEARCH", popupParts );
	}

  console.log( "kokoInfo : "+ popupContent );
  return( popupContent );
}
*/


