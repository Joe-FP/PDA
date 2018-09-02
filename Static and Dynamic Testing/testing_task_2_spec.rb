require("minitest/autorun")
require_relative("./testing_task_2.rb")
require_relative("./card.rb")

class TestCardGame < MiniTest::Test

  def setup
    @card1 = Card.new("Ace", 1)
    @card2 = Card.new("Jack", 10)
    @cardGame = CardGame.new
  end

  def test_CheckForAce
    result = @cardGame.checkforAce(@card2)
    assert_equal(false, result)
  end

  def test_HighestCard
    assert_equal(@card2, @cardGame.highest_card(@card1, @card2))
  end

  def test_totalCards
    cards = [@card1, @card2]
    assert_equal("You have a total of 11", CardGame.cards_total(cards))
  end

end
