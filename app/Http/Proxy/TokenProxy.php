<?php

namespace App\Http\Proxy;

class TokenProxy
{
    protected $http;

    /**
     * TokenProxy constructor.
     * @param $http
     */
    public function __construct(\GuzzleHttp\Client $http)
    {
        $this->http = $http;
    }

    public function login($email, $password)
    {
        if (auth()->attempt(['email'=>$email,'password'=>$password])){
            return $this->proxy('password',[
                'username' => $email,
                'password' => $password,
                'scope'    => ''
            ]);
        }

        return response()->json([
            'status' => false,
            'message'=> 'Credentials not match.'
        ],421);
    }

    private function proxy($grantType, array $data = [])
    {
        # /oauth/token
        $data = array_merge($data,[
            'client_id'=> env('PASSPORT_CLIENT_ID'),
            'client_secret'=> env('PASSPORT_CLIENT_secret'),
            'grant_type'=> $grantType,
            'scope'=>'',
        ]);

        $response = $this->http->post(env('APP_URL').'/oauth/token',[
            'form_params' => $data
        ]);

        $token = json_decode((string) $response->getBody(),true);

        return response()->json([
            'token' => $token['access_token'],
            'expires_in' => $token['expires_in'],

        ])->cookie('refreshToken',$token['refresh_token'], 14400, null, null, false, true);
    }

    public function logout()
    {
        $user = auth()->guard('api')->user();
        $accessToken = $user->token();

        // 让 refresh_token 失效
        app('db')->table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update([
                'revoked' => true
            ]);

        // 移除 refreshToken 的 Cookie
        app('cookie')->forget('refreshToken');

        // accessToken 失效
        $accessToken->revoke();

        return response()->json([
            'message' => 'Logout!'
        ],204);
    }
}
