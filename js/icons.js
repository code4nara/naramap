//　アイコン設定

//  アイコン格納場所（URI）
DEF_ICON_URI = './icon/';

//  画像格納場所（URI）
DEF_IMAGE_URI = './image/';

//  多目的トイレアイコン
var IconToilet   = L.icon({ iconUrl: DEF_ICON_URI+'icon_toilet.png',
                            iconSize: [32,38], iconAnchor: [16,38], popupAnchor: [0,-30] });

//  現在位置
var IconCurrent  = L.icon({ iconUrl: DEF_ICON_URI+'icon_here.png',
                            iconSize: [32,38], iconAnchor: [16,38], popupAnchor: [0,-30] });
//  バス停
var IconBusstop  = L.icon({ iconUrl: DEF_ICON_URI+'icon_busstop.png',
                            iconSize: [22,34], iconAnchor: [11,34], popupAnchor: [0,-30] });

//  薬局
var IconPharmacy = L.icon({ iconUrl: DEF_ICON_URI+'pharmacy.png',
                            iconSize: [30,30], iconAnchor: [15,15], popupAnchor: [0,-10] });
//  facility
var IconRestaurant = L.icon({ iconUrl: DEF_ICON_URI+'restaurant.png',
                            iconSize: [30,30], iconAnchor: [15,15], popupAnchor: [0,-10] });
var IconLodging    = L.icon({ iconUrl: DEF_ICON_URI+'lodging.png',
                            iconSize: [30,30], iconAnchor: [15,15], popupAnchor: [0,-10] });
var IconService    = L.icon({ iconUrl: DEF_ICON_URI+'service.png',
                            iconSize: [30,30], iconAnchor: [15,15], popupAnchor: [0,-10] });

var IconWelfare    = L.icon({ iconUrl: DEF_ICON_URI+'icon_welfare.png',
                            iconSize: [30,30], iconAnchor: [15,15], popupAnchor: [0,-10] });
var IconCulture    = L.icon({ iconUrl: DEF_ICON_URI+'icon_culture.png',
                            iconSize: [30,30], iconAnchor: [15,15], popupAnchor: [0,-10] });
var IconPublicbath = L.icon({ iconUrl: DEF_ICON_URI+'icon_publicbath.png',
                            iconSize: [30,30], iconAnchor: [15,15], popupAnchor: [0,-10] });
var IconFoods      = L.icon({ iconUrl: DEF_ICON_URI+'icon_foods.png',
                              iconSize: [30,30], iconAnchor: [15,15], popupAnchor: [0,-10] });
var IconOffice     = L.icon({ iconUrl: DEF_ICON_URI+'icon_office.png',
                              iconSize: [30,30], iconAnchor: [15,15], popupAnchor: [0,-10] });
var IconBarbershop = L.icon({ iconUrl: DEF_ICON_URI+'icon_barbershop.png',
                              iconSize: [30,30], iconAnchor: [15,15], popupAnchor: [0,-10] });
var IconHairdressers = L.icon({ iconUrl: DEF_ICON_URI+'icon_hairdressers.png',
                            iconSize: [30,30], iconAnchor: [15,15], popupAnchor: [0,-10] });


// デフォルトマーカー（アイコン指定なし）
var IconDefault = L.icon({ iconUrl:DEF_ICON_URI + '../dist/images/marker-icon.png',
                            iconSize: [25,41], iconAnchor: [13,41], popupAnchor: [0,-30] });

// トイレ機能アイコン
var IconToiletBabyseat   = DEF_ICON_URI + 'wc_babyseat.png';
var IconToiletOstomate   = DEF_ICON_URI + 'wc_ostomate.png';
var IconToiletNursingbed = DEF_ICON_URI + 'wc_nursingbed.png';
var IconToiletWashlet    = DEF_ICON_URI + 'wc_washlet.png';
var IconToiletRotation   = DEF_ICON_URI + 'wc_rotation.png';
var IconToiletEmergencycall = DEF_ICON_URI + 'wc_sos.png';

// 画像なし表示
var DEF_NOPHOTO = DEF_IMAGE_URI + 'nophoto.jpg';
