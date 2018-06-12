angular.module('commonService').
    service('storage', ['$localStorage','$cookies','$cookieStore', function ($localStorage,$cookies,$cookieStore) {

        return {
            callback: null,
            setTokenAndUser: function (token, user) {
                // $localStorage.token = token;
                // $localStorage.user = user;
                $cookieStore.put('token',token);
                $cookieStore.put('user',user);
                if (this.callback) {
                    this.callback(user, this.isAdmin());
                }
            },
            logout: function () {
                // $localStorage.token = null;
                // $localStorage.user = null;
                $cookieStore.remove("token");
                $cookieStore.remove("user");
            },
            getUser: function () {
                //return $localStorage.user;
                return $cookieStore.get("user");
            },
            isLogin: function () {
                if ($cookieStore.get("token")) {
                    return true;
                } else {
                    return false;
                }
            },
            isAdmin: function () {
                var user=$cookieStore.get("user");
                if (user) {
                    if (user.emCode && user.emCode.toLowerCase() == 'admin') {
                        return true;
                    }
                }
                return false;
            }
        };
    }]);