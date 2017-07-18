package cz.milanhlinak.quicknotes.server.service;

import cz.milanhlinak.quicknotes.server.dto.QuickNote;
import java.util.List;

/**
 * Quick note service provides methods for creating, retrieving, updating and
 * deleting quick notes.
 *
 * @author Milan Hlinak
 */
public interface QuickNoteService {

    /**
     * Gets all quick notes.
     *
     * @return the list of quick note
     */
    List<QuickNote> getAllQuickNotes();

    /**
     * Gets quick note by ID.
     *
     * @param id the ID
     * @return the quick note
     */
    QuickNote getQuickNote(Long id);

    /**
     * Adds quick note.
     *
     * @param quickNote the quick note
     */
    void addQuickNote(QuickNote quickNote);

    /**
     * Updates quick note with given ID.
     *
     * @param id the ID
     * @param quickNote the quick note
     */
    void updateQuickNote(Long id, QuickNote quickNote);

    /**
     * Deletes quick note with given ID.
     *
     * @param id the ID
     */
    void deleteQuickNote(Long id);

}
