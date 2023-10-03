'use client'
import Form from '@components/Form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const CreatePage = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const { data: session } = useSession();
  const [post, setPost] = useState({ prompt: '', tag: '' })
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('api/post/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag
        })
      })
      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <div>
      <Form type="Create" post={post} submitting={submitting} setPost={setPost} handleSubmit={handleSubmit} />
    </div>
  )
}

export default CreatePage