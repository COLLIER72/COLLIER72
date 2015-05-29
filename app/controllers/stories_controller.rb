class StoriesController < ApplicationController

  after_filter :static_content

  def index
    all_stories = EmergencyStory.order("index,id ASC").all
    @selected_story = all_stories.select {|s| s.selected}.first
    @stories = all_stories.collect.select {|s| !s.selected}.slice(0,2)
    # to show more stories take the slice off the end of the line above -arena
  end

end
