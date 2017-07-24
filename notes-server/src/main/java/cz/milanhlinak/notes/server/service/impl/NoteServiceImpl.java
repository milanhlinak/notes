package cz.milanhlinak.notes.server.service.impl;

import cz.milanhlinak.notes.server.dao.domain.NoteEntity;
import cz.milanhlinak.notes.server.dto.Note;
import cz.milanhlinak.notes.server.exception.NoteNotFoundException;
import java.util.ArrayList;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import cz.milanhlinak.notes.server.dao.repository.NoteRepository;
import cz.milanhlinak.notes.server.service.NoteService;

/**
 * Implementation of note service.
 *
 * @author Milan Hlinak
 */
@Service
public class NoteServiceImpl implements NoteService {

    private static final Logger LOG = LoggerFactory.getLogger(
            NoteServiceImpl.class);

    public final NoteRepository noteRepository;

    @Autowired
    public NoteServiceImpl(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @Override
    public List<Note> getAllNotes() {
        List<Note> notes = new ArrayList<>();
        noteRepository.findAllByOrderByIdDesc().forEach(item -> {
            notes.add(new Note(item.getId(), item.getTitle(), item.getText()));
        });
        LOG.info("All notes retrieved");
        return notes;
    }

    @Override
    public Note getNote(Long id) {
        NoteEntity noteEntity = noteRepository.findOne(id);
        if (noteEntity == null) {
            LOG.error("Note with id {} not found", id);
            throw new NoteNotFoundException(
                    String.format("Note with id %d not found", id));
        }

        Note note = new Note(noteEntity.getId(), noteEntity.getTitle(),
                noteEntity.getText());
        LOG.info("Note with id {} retrieved", id);
        return note;
    }

    @Override
    public void addNote(Note note) {
        NoteEntity noteEntity = new NoteEntity();
        noteEntity.setTitle(note.getTitle());
        noteEntity.setText(note.getText());
        NoteEntity savedNoteEntity = noteRepository.save(noteEntity);
        LOG.info("Note with id {} added", savedNoteEntity.getId());
    }

    @Override
    public void updateNote(Long id, Note note) {
        NoteEntity noteEntity = noteRepository.findOne(id);
        if (noteEntity == null) {
            LOG.error("Note with id {} not found", id);
            throw new NoteNotFoundException(
                    String.format("Note with id %d not found", id));
        }

        noteEntity.setText(note.getText());
        noteEntity.setTitle(note.getTitle());
        NoteEntity savedNoteEntity = noteRepository.save(noteEntity);
        LOG.info("Note with id {} updated", savedNoteEntity.getId());
    }

    @Override
    public void deleteNote(Long id) {
        NoteEntity noteEntity = noteRepository.findOne(id);
        if (noteEntity == null) {
            LOG.error("Note with id {} not found", id);
            throw new NoteNotFoundException(
                    String.format("Note with id %d not found", id));
        }

        noteRepository.delete(id);
        LOG.info("Note with id {} deleted", id);
    }

}
