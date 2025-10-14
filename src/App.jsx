


import React, { useState } from 'react';
import { Container, SimpleGrid, Group, Title, Button } from '@mantine/core';
import AstroHeader from './components/BlogHeader';

import PolaroidCard from './components/PolaroidCard';
import NewPostModal from './components/NewPostModal';
import DiaryInput from './components/DiaryInput';
import DiaryList from './components/DiaryList';

const initialPosts = [
  {
    id: 1,
    title: 'Me voy a canadá!!',
    description: 'Muy emocionado de tener esta oportunidad. Gracias Dios',
    image: 'https://www.uautonoma.cl/content/uploads/2025/06/FOTO-estudiante-obtiene-beca-en-canada-2.jpg',
  },
  {
    id: 2,
    title: 'Una planta',
    description: 'Esta foto no es mia, necesito ejemplos',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
  },
  {
    id: 3,
    title: 'Victoria',
    description: 'Mi hermosa ciudad :D',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Entrada_victoria_regi%C3%B3n_de_la_araucania.jpg',
  },
];


function AstroPhotoBlogApp() {
  const [posts, setPosts] = useState(initialPosts);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [notes, setNotes] = useState([]);

  const handleAddPost = (post) => {
    setPosts([post, ...posts]);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleEditPost = (updatedPost) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
    setEditingPost(null);
    setEditModalOpen(false);
  };

  const openEditModal = (post) => {
    setEditingPost(post);
    setEditModalOpen(true);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: 'url(https://img.freepik.com/vector-gratis/notas-rasgadas-vector-fondo-melocoton_53876-109024.jpg) center/cover no-repeat fixed',
        paddingTop: 90,
        paddingBottom: 40,
        boxSizing: 'border-box',
      }}
    >
  <AstroHeader />
  <div style={{ maxWidth: 1200, margin: '0 auto', padding: 20, background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))', borderRadius: 12 }}>
  <Container size="lg" style={{ maxWidth: 1200 }}>
        <Group position="apart" mb="xl">
          <Title order={2} style={{ color: '#fff', fontWeight: 600, letterSpacing: 1, textShadow: '0 2px 8px #222' }}>
            Explora y comparte tus momentos
          </Title>
          <Button
            size="md"
            variant="light"
            color="white"
            radius={"md "}
            onClick={() => setModalOpen(true)}
            style={{ fontWeight: 600 }}
          >
            + Nueva foto
          </Button>
        </Group>
        <SimpleGrid
          cols={3}
          spacing="xl"
          breakpoints={[
            { maxWidth: 900, cols: 2, spacing: 'lg' },
            { maxWidth: 600, cols: 1, spacing: 'md' },
          ]}
        >
          {posts.map(post => (
            <PolaroidCard
              key={post.id}
              post={post}
              onEdit={() => openEditModal(post)}
              onDelete={() => handleDeletePost(post.id)}
            />
          ))}
        </SimpleGrid>
  </Container>
  </div>
      <NewPostModal opened={modalOpen} onClose={() => setModalOpen(false)} onAdd={handleAddPost} />
      <div style={{ maxWidth: 1200, margin: '24px auto 60px' }}>
        <DiaryInput onAdd={(note) => setNotes(prev => [note, ...prev])} />
        <DiaryList notes={notes} onDelete={(id) => setNotes(prev => prev.filter(n => n.id !== id))} />
      </div>
      <NewPostModal
        opened={editModalOpen}
        onClose={() => { setEditModalOpen(false); setEditingPost(null); }}
        onAdd={handleEditPost}
        initialData={editingPost}
        isEdit
      />
    </div>
  );
}

export default AstroPhotoBlogApp;
