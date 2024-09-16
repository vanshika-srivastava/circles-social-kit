import React from 'react'
import { useRouter } from 'next/router'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, Share2 } from 'lucide-react'

export default function ProfilePage({ profileData }) {
  const router = useRouter()

  const handleEdit = () => {
    // Implement edit functionality
    console.log('Edit profile')
  }

  const handleShare = () => {
    // Implement share functionality
    console.log('Share profile')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-300 via-pink-300 to-orange-300 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Profile</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <Avatar className="w-32 h-32">
            <AvatarImage src={profileData.image} alt={profileData.name} />
            <AvatarFallback>{profileData.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold">{profileData.name}</h2>
          <p className="text-sm text-gray-500 break-all">{profileData.address}</p>
          <p className="text-center">{profileData.bio}</p>
          <div className="flex space-x-4 mt-4">
            <Button onClick={handleEdit} variant="outline">
              <Pencil className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
            <Button onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-2" />
              Share Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
