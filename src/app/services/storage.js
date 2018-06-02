angular.module('commonService').
    service('storage', ['$localStorage', function ($localStorage) {

        return {
            callback: null,
            setTokenAndUser: function (token, user) {
                $localStorage.token = token;
                $localStorage.user = user;
                if (this.callback) {
                    this.callback(user, this.isAdmin());
                }
            },
            logout: function () {
                $localStorage.token = null;
                $localStorage.user = null;
            },
            getUser: function () {
                return $localStorage.user;
            },
            isLogin: function () {
                if ($localStorage.token) {
                    return true;
                } else {
                    return false;
                }
            },
            isAdmin: function () {
                if ($localStorage.user) {
                    if ($localStorage.user.emCode && $localStorage.user.emCode.toLowerCase() == 'admin') {
                        return true;
                    }
                }
                return false;
            }
        };
    }]);