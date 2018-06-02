angular.module('commonService').
    service('storage', ['$localStorage', function ($localStorage) {

        return {
            callback: null,
            setTokenAndUser: function (token, user) {
                $localStorage.token = token;
                $localStorage.user = user;
                if (this.callback) {
                    this.callback(user);
                }
            },
            logout: function () {
                $localStorage.token = null;
                $localStorage.user = null;
            },
            getUser: function () {
                return $localStorage.user;
            }
        };
    }]);