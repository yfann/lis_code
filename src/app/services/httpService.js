angular.module('httpService', []).
    service('mockService', ['$q', '$timeout', '$http', '$state',
        function ($q, $timeout, $http, $state) {
            this.get = function (url, params) {
                var deferred = $q.defer();
                url = "/mock_data/" + url + ".json";
                //view.loading();
                $http.get(url).then(function (result) {
                    var d = result.data;
                    if (d.status == 0) {
                        deferred.resolve(d.data);
                    } else {
                        switch (d.status) {
                            default:
                                // view.alert(result.msg);
                                //$state.go("login");
                                deferred.reject(d);
                        }
                    }
                }, function (x) {
                    //view.close_loading();
                    deferred.reject(T("msg.system_error"));
                });

                return deferred.promise;
            };
        }]);


angular.module('httpService', []).
    service('dataService', ['$http',
        function ($http) {
            var host="http://localhost:8123";

            return {
                //request
                getRequestList: function () {
                    var url = '/mock_data/request_list.json';
                    return $http.get(url);
                },
                getSexList: function () {
                    var url = '/app/mock_data/sex_list.json';
                    return $http.get(url);
                },
                //lab item
                getLabItemById:function(id){
                    var url = '/api/system/labitemdetail?id=';
                    return $http.get(url + id);
                },
                getlabitemList: function (query) {
                    var url = '/api/system/labitems?search=';
                    return $http.get(url+(query?query:''));
                },
                saveLabitem: function (model) {
                    var url = '/api/system/labitems';
                    return $http.post(url,model);
                },
                deleteLabItem:function(obj){
                    var url = '/api/system/labitems';
                    return $http.delete(url,{
                        "headers":{
                            'Content-Type':'application/json'
                        },
                        data:obj
                    });
                },
                //lab item set
                getLabItemSetById:function(id){
                    var url = '/api/system/labitemsetdetail?id=';
                    return $http.get(url + id);
                },
                getLabItemSetList: function (query) {
                    var url = '/api/system/labitemsets?search=';
                    return $http.get(url+(query?query:''));
                },
                saveLabItemSet: function (model) {
                    var url = '/api/system/labitemsets';
                    return $http.post(url,model);
                },
                deleteLabItemSet:function(obj){
                    var url = '/api/system/labitemsets';
                    return $http.delete(url,{
                        "headers":{
                            'Content-Type':'application/json'
                        },
                        data:obj
                    });
                },
                //lab category
                getLabCategoryById:function(){

                },
                getLabCategoryList: function (query) {
                    var url = '/app/mock_data/labcategory_list.json';
                    return $http.get(url);
                },
                saveLabCategory: function (model) {

                },
                deleteLabCategory:function(id){

                },
                //qc value
                getQCValueById:function(id){
                    var url = '/api/system/qcvaluedetail?id=';
                    return $http.get(url + id);
                },
                getQCValueList: function (query) {
                    var url = '/api/system/qcvalues?search=';
                    return $http.get(url+(query?query:''));
                },
                saveQCValue: function (model) {
                    var url = '/api/system/qcvalues';
                    return $http.post(url,model);
                },
                deleteQCValue:function(obj){
                    var url = '/api/system/qcvalues';
                    return $http.delete(url,{
                        "headers":{
                            'Content-Type':'application/json'
                        },
                        data:obj
                    });
                },
                //sample type
                getSampleTypeById:function(id){
                    var url = '/api/system/sampletypedetail?id=';
                    return $http.get(url + id);
                },
                getSampleTypeList: function (query) {
                    var url = host+'/api/system/sampletypes?search=';
                    return $http.get(url+(query?query:''));
                },
                saveSampleType: function (model) {
                    var url = '/api/system/sampletypes';
                    return $http.post(url,model);
                },
                deleteSampleType:function(obj){
                    var url = '/api/system/sampletypes';
                    return $http.delete(url,{
                        "headers":{
                            'Content-Type':'application/json'
                        },
                        data:obj
                    });
                },
                //crisis
                getCrisisById:function(id){
                    var url = '/api/system/crisisdetail?id=';
                    return $http.get(url + id);
                },
                getCrisisList: function (query) {
                    var url = host+'/api/system/crisis?search=';
                    return $http.get(url+(query?query:''));
                },
                saveCrisis: function (model) {
                    var url = '/api/system/crisis';
                    return $http.post(url,model);
                },
                deleteCrisis:function(obj){
                    var url = '/api/system/crisis';
                    return $http.delete(url,{
                        "headers":{
                            'Content-Type':'application/json'
                        },
                        data:obj
                    });
                },
                //user
                getEmployeeById:function(id){
                    var url = '/api/system/userdetail?id=';
                    return $http.get(url + id);
                },
                saveEmployee: function (model) {
                    var url = '/api/system/users';
                    return $http.post(url,model);
                },
                getEmployeeList: function (query) {
                    var url = host+'/api/system/users?search=';
                    return $http.get(url+(query?query:''));
                },
                deleteEmployee:function(obj){
                    var url = '/api/system/users';
                    return $http.delete(url,{
                        "headers":{
                            'Content-Type':'application/json'
                        },
                        data:obj
                    });
                },
                //medical
                getSiteList: function (query) {
                    var url = host+'/api/system/medicalinstitutions?search=';
                    return $http.get(url+(query?query:''));
                },
                saveSite: function (model) {
                    var url = '/api/system/medicalinstitutions';
                    return $http.post(url,model);
                },
                getSiteById:function(id){
                    var url = '/api/system/medicalinstitutiondetail?id=';
                    return $http.get(url + id);
                },
                deleteSite:function(entity){
                    var url = '/api/system/medicalinstitutions';
                    return $http.delete(url,{
                        "headers":{
                            'Content-Type':'application/json'
                        },
                        data:entity
                    });
                },
                // department
                getDeptById:function(id){

                },
                getDeptList: function () {
                    var url = '/mock_data/dept_list.json';
                    return $http.get(url);
                },
                deleteDept:function(id){

                },
                saveDept:function(){

                },
                deletePatient:function(id){

                },
                getSampleList: function () {
                    var url = '/mock_data/sample_list.json';
                    return $http.get(url);
                },
                savePatient: function (model) {

                },
                getPatientList: function () {

                },
            };
        }]);