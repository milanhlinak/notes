package cz.milanhlinak.quicknotes.server.controller;

import cz.milanhlinak.quicknotes.server.dto.QuickNote;
import cz.milanhlinak.quicknotes.server.service.QuickNoteService;
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

/**
 * Quick note controller.
 *
 * @author Milan Hlinak
 */
@RestController
@RequestMapping("/api/quicknotes")
public class QuickNoteController {

    private static final Logger LOG = LoggerFactory.getLogger(
            QuickNoteController.class);

    private final QuickNoteService quickNotesService;

    @Autowired
    public QuickNoteController(QuickNoteService quickNotesService) {
        this.quickNotesService = quickNotesService;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public ResponseEntity retrieveQuickNotes() {
        LOG.info("Retrieve quick notes request");
        List<QuickNote> result = quickNotesService.getAllQuickNotes();
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity retrieveQuickNote(@PathVariable("id") long id) {
        LOG.info("Retrieve quick note request");
        QuickNote result = quickNotesService.getQuickNote(id);
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public ResponseEntity createQuickNote(@RequestBody QuickNote quickNote) {
        LOG.info("Create quick note request");
        quickNotesService.addQuickNote(quickNote);
        List<QuickNote> result = quickNotesService.getAllQuickNotes();
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity updateQuickNote(@PathVariable("id") long id,
            @RequestBody QuickNote quickNote) {
        LOG.info("Update quick note request");
        quickNotesService.updateQuickNote(id, quickNote);
        List<QuickNote> result = quickNotesService.getAllQuickNotes();
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteQuickNote(@PathVariable("id") long id) {
        LOG.info("Delete quick note request");
        quickNotesService.deleteQuickNote(id);
        List<QuickNote> result = quickNotesService.getAllQuickNotes();
        return new ResponseEntity(result, HttpStatus.OK);
    }

}
