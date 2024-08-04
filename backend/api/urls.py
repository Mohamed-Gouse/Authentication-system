from django.urls import path, include
from api import views
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('profile', views.ProfileViewSet)
router.register('users', views.UserManagemet)


urlpatterns = [
    path("", include(router.urls)),
    path("user/", views.UserViewSet.as_view() ),
    path("token/", views.MyTokenView.as_view() ),
    path("token/refresh/", TokenRefreshView.as_view() ),
    path("register/", views.RegisterView.as_view() ),
]
