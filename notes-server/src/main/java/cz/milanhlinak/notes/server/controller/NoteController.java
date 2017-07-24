package cz.milanhlinak.notes.server.controller;

import cz.milanhlinak.notes.server.dto.Note;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import cz.milanhlinak.notes.server.service.NoteService;

/**
 * Note controller.
 *
 * @author Milan Hlinak
 */
@RestController
@RequestMapping("/api/notes")
public class NoteController {

    private static final Logger LOG = LoggerFactory.getLogger(
            NoteController.class);

    private final NoteService notesService;

    @Autowired
    public NoteController(NoteService notesService) {
        this.notesService = notesService;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public ResponseEntity retrieveNotes() {
        LOG.info("Retrieve notes request");
        List<Note> result = notesService.getAllNotes();
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity retrieveNote(@PathVariable("id") long id) {
        LOG.info("Retrieve note request");
        Note result = notesService.getNote(id);
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public ResponseEntity createNote(@RequestBody Note note) {
        LOG.info("Create note request");
        notesService.addNote(note);
        List<Note> result = notesService.getAllNotes();
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity updateNote(@PathVariable("id") long id,
            @RequestBody Note note) {
        LOG.info("Update note request");
        notesService.updateNote(id, note);
        List<Note> result = notesService.getAllNotes();
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteote(@PathVariable("id") long id) {
        LOG.info("Delete note request");
        notesService.deleteNote(id);
        List<Note> result = notesService.getAllNotes();
        return new ResponseEntity(result, HttpStatus.OK);
    }

}
