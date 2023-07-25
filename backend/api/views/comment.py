from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from ..pagination import StandardResultsSetPagination
from ..serializers import CommentSerializer
from ..models import Comment

class CommentCreateAPIView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    serializer_class = CommentSerializer

class CommentsListAPIView(ListAPIView):
    serializer_class = CommentSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        type = self.kwargs["type"]
        commented_object_id= self.kwargs["commented_object_id"]
        return Comment.objects.filter(type=type, commented_object_id=commented_object_id).order_by("-created_at")