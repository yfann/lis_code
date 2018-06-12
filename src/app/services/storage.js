angular.module('commonService').
    service('storage', ['$localStorage','$cookies', function ($localStorage,$cookies) {

        return {
            callback: null,
            setTokenAndUser: function (token, user) {
                // $localStorage.token = token;
                // $localStorage.user = user;
                $cookies.put('token',token);
                $cookies.putObject('user',user);
                if (this.callback) {
                    this.callback(user, this.isAdmin());
                }
            },
            logout: function () {
                // $localStorage.token = null;
                // $localStorage.user = null;
                $cookies.remove("token");
                $cookies.remove("user");
            },
            getUser: function () {
                //return $localStorage.user;
                return $cookies.getObject("user");
            },
            isLogin: function () {
                if ($cookies.get("token")) {
                    return true;
                } else {
                    return false;
                }
            },
            isAdmin: function () {
                var user=$cookies.getObject("user");
                if (user) {
                    if (user.emCode && user.emCode.toLowerCase() == 'admin') {
                        return true;
                    }
                }
                return false;
            }
        };
    }]);