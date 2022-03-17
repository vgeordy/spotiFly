from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests

# Create your views here.


######### READ:
# For ALL of these endpoints, they initially will try to get the token from the session vars. If that cannot be found it will check for the token in the query strings.
# If for some reason the token is not automatically getting found, provide it in query strings! ie tack on a ?token=TOKEN_HERE to the end of the endpoint,
# for instance, /api/user-library?token=TOKEN_HERE
# obviously /api/token is the only exception here.

class UserTokenView(APIView):
    # literally just returns the current session token. may be problematic if the API is somehow being called not on behalf of the client.
    # will see if i can determine a time when this will happen and do any remediation that may be necessary for this
    # alternatively you can specify a token in the query string, such as /api/u
    def get(self, request):
        token = request.session.get('spotify_token') or 'No Token Set'
        return Response({'token': token})

class TrackFeaturesView(APIView):
    # returns acousticness, danceability, key, etc. all the stuff we want.
    # directly returns spotify json, does not alter the format. see https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-audio-features
    # USAGE: /api/track-features?ids=trackid,trackid,trackid,etc
    def get(self, request):
        token = request.session.get('spotify_token') or request.GET.get('token', None)
        if not token:
            return Response({'error': 'No token provided'})
        ids = request.GET.get('ids', None)
        print(ids)
        if not ids:
            return Response({'error': 'No ids provided in query'})
        headers = {
            'Authorization': f'Bearer {token}'
        }
        response = requests.get(f'https://api.spotify.com/v1/audio-features?ids={ids}', headers=headers)
        return Response(response.json())

class UserLibraryView(APIView):
    # returns the ENTIRETY of the user's library. very heavy, so use sparingly... please?
    # USAGE: /api/user-library
    def get(self, request):
        token = request.session.get('spotify_token') or request.GET.get('token', None)
        if not token:
            return Response({'error': 'No token provided'})
        headers = {
            'Authorization': f'Bearer {token}'
        }
        response = requests.get(f'https://api.spotify.com/v1/me/tracks', headers=headers)
        return Response(response.json())
