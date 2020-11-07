var data = [
    {
        "week": "Week-1",
        "activity": "BASECAMP",
        "status": "Assigned",
        "Url" : "https://www.google.com",
        "actPk": "54576",
        "actLabel": "channel"
    },
    {
        "week": "Week-2",
        "activity": "BUILDING & LEADING TEAMS",
        "status": "Assigned",
        "Url" : "https://www.google.com",
        "actPk": "54401",
        "actLabel": "channel"
    },
    {
        "week": "Week-3",
        "activity": "EMPLOYEE RETENTION",
        "status": "Assigned",
        "Url" : "https://www.google.com",
        "actPk": "54381",
        "actLabel": "channel"
    },
    {
        "week": "Week-4",
        "activity": "ESTABLISHING A POSITIVE WORK CU",
        "status": "Assigned",
        "Url" : "https://www.google.com",
        "actPk": "54713",
        "actLabel": "channel"
    },
    {
        "week": "Week-5",
        "activity": "MANAGING YOURSELF",
        "status": "Assigned",
        "Url" : "https://www.google.com",
        "actPk": "54364",
        "actLabel": "channel"
    },
    {
        "week": "Week-6",
        "activity": "MENTORING",
        "status": "InProgress",
        "Url" : "https://www.google.com",
        "actPk": "54327",
        "actLabel": "channel"
    },
    {
        "week": "Week-7",
        "activity": "TESTNG",
        "status": "Assigned",
        "Url" : "https://www.google.com",
        "actPk": "35356",
        "actLabel": "channel"
    },{
        "week": "Week-8",
        "activity": "TO-DO",
        "status": "Assigned",
        "Url" : "https://www.google.com",
        "actPk": "83928",
        "actLabel": "channel"
    },{
        "week": "Week-9",
        "activity": "COMMUNICATION ESSENTIALS",
        "status": "Assigned",
        "Url" : "https://www.google.com",
        "actPk": "54781",
        "actLabel": "channel"
    },
    {
        "week": "Week-10",
        "activity": "DEVELOPING A BUSINESS EXECUTION CULTURE",
        "status": "Assigned",
        "Url" : "https://www.google.com",
        "actPk": "54587",
        "actLabel": "channel"
    },
    {
        "week": "Week-11",
        "activity": "DIGITAL TRANSFORMATION STRATEGY",
        "status": "Assigned",
        "Url" : "https://www.google.com",
        "actPk": "54617",
        "actLabel": "channel"
    },
    {
        "week": "Week-12",
        "activity": "LEADING TEAMS",
        "status": "Assigned",
        "Url" : "https://www.google.com",
        "actPk": "54464",
        "actLabel": "channel"
    },{//latestones
        "week": "Week-1",
        "activity": "MARKET RESEARCH",
        "status": "Assigned",
        "Url" : "https://www.google.com",
        "actPk": "54702",
        "actLabel": "channel"
    },{
        "week": "Week-2",
        "activity": "MARKETING STRATEGY & PLANNING",
        "status": "Assigned",
        "Url" : "https://www.google.com",
        "actPk": "54556",
        "actLabel": "channel"
    },{
        "week": "Week-3",
        "activity": "SOCIAL MEDIA MARKETING",
        "status": "Assigned",
        "Url" : "https://www.google.com",
        "actPk": "54567",
        "actLabel": "channel"
    },{
        "week": "Week-4",
        "activity": "WORKPLACE AFTER PANDEMIC AND CRISIS",
        "status": "Assigned",
        "Url" : "https://www.google.com",
        "actPk": "108896",
        "actLabel": "channel"
    },{
        "week": "Week-5",
        "activity": "WORKING REMOTELY",
        "status": "Assigned",
        "Url" : "https://www.google.com",
        "actPk": "108890",
        "actLabel": "channel"
    }
];

var outSideData = [
    {
        "week": "Week-1",
        "Date": "9/14/2020",
        "status": "Assigned",
    },
    {
        "week": "Week-2",
        "Date": "6/22/2020",
        "status": "Assigned",
    },
    {
        "week": "Week-3",
        "Date": "6/29/2020",
        "status": "Assigned",
    },
    {
        "week": "Week-4",
        "Date": "7/6/2020",
        "status": "Assigned",
    },
    {
        "week": "Week-5",
        "Date": "7/13/2020",
        "status": "Assigned",
    },
    {
        "week": "Week-6",
        "Date": "7/20/2020",
        "status": "Assigned",
    },
    {
        "week": "Week-7",
        "Date": "1/10/2020",
        "status": "Assigned",
    },
    {
        "week": "Week-8",
        "Date": "1/10/2020",
        "status": "Assigned",
    }, {
        "week": "Week-9",
        "Date": "1/10/2020",
        "status": "Assigned",
    }, {
        "week": "Week-10",
        "Date": "1/10/2020",
        "status": "Assigned",
    }, {
        "week": "Week-11",
        "Date": "1/10/2020",
        "status": "Assigned",
    }, {
        "week": "Week-12",
        "Date": "1/10/2020",
        "status": "Assigned",
    }
];

function weekDataFunction(e) {
    var uniqueArray = [];
    var target = "";
    var dynamicClickData = (e.target.id);
    $('.modal-title').empty().append(dynamicClickData);
    var myArray = data;
    if (myArray != undefined && myArray != null && myArray != "" && myArray.length > 0) {
        $('.rows_data').empty();
        for (var z = 0; z < myArray.length; z++) {
            if (dynamicClickData == myArray[z].week) {
                //modal header
                if (uniqueArray.indexOf(myArray[z].actPk) === -1) {
                    var buttonData = ""
                    if (myArray[z].status == "InProgress") {
                        buttonData = "Start"
                    } 
                    // else if (myArray[z].status == "Assigned") {
                    //     buttonData = "Register"
                    // } 
                    else {
                        buttonData = "Start"
                    }

                    if(myArray[z].actLabel == "channel"){
                        buttonData = "View"
                    }

                    var linkUrlData = myArray[z].Url;
                    if(linkUrlData.includes('pillarRedirect')){
                        target = "_top";
                    }else {
                        target = "_self";
                    }

                    $('.rows_data').append('<div class="body_row_info col-md-12 pad_null">\
                                            <p class="act_div col-md-6 col-sm-6 col-xs-6 rowData pad_five">' + myArray[z].activity + '</p>\
                                            <p class="'+ myArray[z].status + ' col-md-4 col-sm-4 col-xs-4 rowData pad_five">' + myArray[z].status + '</p>\
                                            <a href="'+ myArray[z].Url +'" target="'+ target +'" class="col-md-2 col-sm-2 col-xs-2 rowData pad_five">' + buttonData + ' <span class="fa fa-angle-right roadMap_actionIcon"></span></a>\
                                            </div>')

                    uniqueArray.push(myArray[z].actPk);
                }
                //modal body
            }
        }
        if (uniqueArray.length == 0) {
            $('.rows_data').append('<h4 class="noData">No Activities Available</h4>');
        }
    }
}

(function () {
    var outSideUniqueArray = [];
    var outSideDatagetting = outSideData;
    function colorCheckFunction() {
        if (outSideDatagetting[a].status == "Completed") {
            $('#main_roadMap_section .each_week_Data.eWeek_' + (a + 1) + '').addClass('Completed');
        } else if (outSideDatagetting[a].status == "InProgress") {
            $('#main_roadMap_section .each_week_Data.eWeek_' + (a + 1) + '').addClass('InProgress');
        } else if (outSideDatagetting[a].status == "Due") {
            $('#main_roadMap_section .each_week_Data.eWeek_' + (a + 1) + '').addClass('Due');
        } else if (outSideDatagetting[a].status == "OverDue") {
            $('#main_roadMap_section .each_week_Data.eWeek_' + (a + 1) + '').addClass('OverDue');
        }else if (outSideDatagetting[a].status == "OverDue"){
            $('#main_roadMap_section .each_week_Data.eWeek_' + (a + 1) + '').addClass('Registered');
        }else {
            $('#main_roadMap_section .each_week_Data.eWeek_' + (a + 1) + '').addClass('Assigned');
        }
    }
    if (outSideDatagetting != undefined && outSideDatagetting != null && outSideDatagetting != "" && outSideDatagetting.length > 0) {
        for (var a = 0; a < outSideDatagetting.length; a++) {
            if (outSideUniqueArray.indexOf(outSideDatagetting[a].week) === -1) {                
                if (outSideDatagetting[a].week == "Week-1") {
                    colorCheckFunction();
                    $('.first_week_classes .status').empty().append(outSideDatagetting[a].status);
                    $('.first_week_classes .date_class').empty().append(outSideDatagetting[a].Date);
                } else if (outSideDatagetting[a].week == "Week-2") {
                    colorCheckFunction();
                    $('.second_week_classes .status').empty().append(outSideDatagetting[a].status);
                    $('.second_week_classes .date_class').empty().append(outSideDatagetting[a].Date);
                } else if (outSideDatagetting[a].week == "Week-3") {
                    colorCheckFunction();
                    $('.third_week_classes .status').empty().append(outSideDatagetting[a].status);
                    $('.third_week_classes .date_class').empty().append(outSideDatagetting[a].Date);
                } else if (outSideDatagetting[a].week == "Week-4") {
                    colorCheckFunction();
                    $('.fourth_week_classes .status').empty().append(outSideDatagetting[a].status);
                    $('.fourth_week_classes .date_class').empty().append(outSideDatagetting[a].Date);
                } else if (outSideDatagetting[a].week == "Week-5") {
                    colorCheckFunction();
                    $('.fifth_week_classes .status').empty().append(outSideDatagetting[a].status);
                    $('.fifth_week_classes .date_class').empty().append(outSideDatagetting[a].Date);
                } else if (outSideDatagetting[a].week == "Week-6") {
                    colorCheckFunction();
                    $('.sixth_week_classes .status').empty().append(outSideDatagetting[a].status);
                    $('.sixth_week_classes .date_class').empty().append(outSideDatagetting[a].Date);
                } else if (outSideDatagetting[a].week == "Week-7") {
                    colorCheckFunction();
                    $('.seventh_week_classes .status').empty().append(outSideDatagetting[a].status);
                    $('.seventh_week_classes .date_class').empty().append(outSideDatagetting[a].Date);
                } else if (outSideDatagetting[a].week == "Week-8") {
                    colorCheckFunction();
                    $('.eighth_week_classes .status').empty().append(outSideDatagetting[a].status);
                    $('.eighth_week_classes .date_class').empty().append(outSideDatagetting[a].Date);
                } else if (outSideDatagetting[a].week == "Week-9") {
                    colorCheckFunction();
                    $('.ningth_week_classes .status').empty().append(outSideDatagetting[a].status);
                    $('.ningth_week_classes .date_class').empty().append(outSideDatagetting[a].Date);
                } else if (outSideDatagetting[a].week == "Week-10") {
                    colorCheckFunction();
                    $('.tenth_week_classes .status').empty().append(outSideDatagetting[a].status);
                    $('.tenth_week_classes .date_class').empty().append(outSideDatagetting[a].Date);
                } else if (outSideDatagetting[a].week == "Week-11") {
                    colorCheckFunction();
                    $('.eleventh_week_classes .status').empty().append(outSideDatagetting[a].status);
                    $('.eleventh_week_classes .date_class').empty().append(outSideDatagetting[a].Date);
                } else if (outSideDatagetting[a].week == "Week-12") {
                    colorCheckFunction();
                    $('.twelth_week_classes .status').empty().append(outSideDatagetting[a].status);
                    $('.twelth_week_classes .date_class').empty().append(outSideDatagetting[a].Date);
                }
                outSideUniqueArray.push(outSideDatagetting[a].week);
            }

        }
    }
}());