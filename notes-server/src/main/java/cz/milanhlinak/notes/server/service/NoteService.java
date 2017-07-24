package cz.milanhlinak.notes.server.service;

import cz.milanhlinak.notes.server.dto.Note;
import java.util.List;

/**
 * Note service provides methods for creating, retrieving, updating and deleting
 * notes.
 *
 * @author Milan Hlinak
 */
public interface NoteService {

    /**
     * Gets all notes.
     *
     * @return the list of note
     */
    List<Note> getAllNotes();

    /**
     * Gets note by ID.
     *
     * @param id the ID
     * @return the note
     */
    Note getNote(Long id);

    /**
     * Adds note.
     *
     * @param note the note
     */
    void addNote(Note note);

    /**
     * Updates note with given ID.
     *
     * @param id the ID
     * @param note the note
     */
    void updateNote(Long id, Note note);

    /**
     * Deletes note with given ID.
     *
     * @param id the ID
     */
    void deleteNote(Long id);

}
