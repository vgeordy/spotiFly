from django.urls import path
from .views import UserTokenView, TrackFeaturesView, UserLibraryView

urlpatterns = [ 
    path('/token', UserTokenView.as_view(), name='token'),
    path('/track-features', TrackFeaturesView.as_view(), name='track-features'),
    path('/user-library', UserLibraryView.as_view(), name='user-library')
]