import requests
import base64
from auth.credentials import REDIRECT_URL, CLIENT_ID, CLIENT_SECRET
ENDPOINT = 'https://api.spotify.com/v1'
TOKEN_URL = 'https://accounts.spotify.com/api/token'
# utils for what we need to do in the spotify api

def session_token(request):
    return request.session.get('spotify_token')

def get_user_library(request):
    token = session_token(request)
    headers = {
        'Authorization': f'Bearer {token}'
    }
    response = requests.get(f'{ENDPOINT}/me/tracks', headers=headers)
    print(f'response was {response.text}')
    return response.json()

def create_private_playlist(request, playlist_name):
    # create a private playlist
    token = session_token(request)
    headers = {
        'Authorization': f'Bearer {token}'
    }
    data = {
        'name': playlist_name,
        'public': False
    }
    response = requests.post(f'{ENDPOINT}/me/playlists'.format(user_id=request.session.get('user_id')), headers=headers, data=data)
    return response.json()

def code_to_token(code):
    print(f"Got {code} as code, exchanging for token.")
    #encoded_clientid = 
    data = {
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': REDIRECT_URL
    }
    response = requests.post(f'{TOKEN_URL}', data=data, auth=(CLIENT_ID, CLIENT_SECRET))
    return response.json()
