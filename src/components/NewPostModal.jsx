
import { useState, useEffect } from 'react';
import { Modal, TextInput, Textarea, Button } from '@mantine/core';

function NewPostModal({ opened, onClose, onAdd, initialData, isEdit }) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [image, setImage] = useState(initialData?.image || '');

  useEffect(() => {
    setTitle(initialData?.title || '');
    setDescription(initialData?.description || '');
    setImage(initialData?.image || '');
  }, [initialData, opened]);

  const handleSubmit = () => {
    if (title && description && image) {
      onAdd({
        id: initialData?.id || Date.now(),
        title,
        description,
        image,
      });
      setTitle('');
      setDescription('');
      setImage('');
      onClose();
    }
  };

  return (
    <Modal opened={opened} onClose={onClose} title={isEdit ? 'Editar foto' : 'Nueva foto'} centered>
      <TextInput
        label="Título"
        placeholder="Título de la foto"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        mb="sm"
      />
      <TextInput
        label="URL de la imagen"
        placeholder="Pega aquí la URL de la foto"
        value={image}
        onChange={e => setImage(e.target.value)}
        required
        mb="sm"
      />
      <Textarea
        label="Descripción"
        placeholder="Describe tu foto"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
        mb="md"
        autosize
        minRows={2}
        maxRows={4}
      />
      <Button fullWidth onClick={handleSubmit} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        {isEdit ? 'Guardar cambios' : 'Publicar'}
      </Button>
    </Modal>
  );
}

export default NewPostModal;
